// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "erc721a/contracts/ERC721A.sol";

contract TheLittleKings is Ownable, ERC721A {

    using Strings for uint;

    enum Step {
        NotStarted,
        PreSale,
        WhitelistSale,
        PublicSale,
        SoldOut
    }

    string public baseURI;

    bool public revealed = false;

    Step public sellingStep;

    bytes32 public whitelistMerkleRoot;

    bytes32 public premintMerkleRoot;

    mapping(address => uint) public amountNFTsperwallet;

    uint public mintLimit;

    uint public maxSupply;

    uint public reservedAmount;

    event mint(address);

    constructor(
        bytes32 _whitelistMerkleRoot,
        bytes32 _premintMerkleRoot,
        string memory _baseURI,
        uint _mintLimit,
        uint _maxSupply,
        uint _reservedAmount
        ) ERC721A("The Little Kings", "KING") {
        whitelistMerkleRoot = _whitelistMerkleRoot;
        premintMerkleRoot = _premintMerkleRoot;
        baseURI = _baseURI;
        mintLimit = _mintLimit;
        maxSupply = _maxSupply;
        reservedAmount = _reservedAmount;
    }

    receive() external payable {}

    fallback() external payable {}

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract.");
        _;
    }

    function preMint(uint _quantity, bytes32[] calldata _proof) external callerIsUser {
        require(sellingStep == Step.PreSale, "Pre sale is not activated");
        require(isPreminted(msg.sender, _proof), "Not Presale address");
        require(totalSupply() + _quantity <= maxSupply - reservedAmount, "Max supply exceeded");
        require(amountNFTsperwallet[msg.sender] + _quantity <= mintLimit, "The NFT minting limit exceeded");
        amountNFTsperwallet[msg.sender] += _quantity;
        _safeMint(msg.sender, _quantity);
        emit mint(msg.sender);
    }

    function whitelistMint(uint _quantity, bytes32[] calldata _proof) external callerIsUser {
        require(sellingStep == Step.WhitelistSale, "Whitelist sale is not activated");
        require(isWhiteListed(msg.sender, _proof), "Not whitelisted");
        require(totalSupply() + _quantity <= maxSupply - reservedAmount, "Max supply exceeded");
        require(amountNFTsperwallet[msg.sender] + _quantity <= mintLimit, "The NFT minting limit exceeded");
        amountNFTsperwallet[msg.sender] += _quantity;
        _safeMint(msg.sender, _quantity);
        emit mint(msg.sender);
    }

    function publicSaleMint(uint _quantity) external callerIsUser {
        require(sellingStep == Step.PublicSale, "Public sale is not activated");
        require(totalSupply() + _quantity <= maxSupply - reservedAmount, "Max supply exceeded");
        require(amountNFTsperwallet[msg.sender] + _quantity <= mintLimit, "The NFT minting limit exceeded");
        amountNFTsperwallet[msg.sender] += _quantity;
        _safeMint(msg.sender, _quantity);
        emit mint(msg.sender);
    }

    function gift(address _to, uint _quantity) external onlyOwner returns(uint256){
        require(totalSupply() + _quantity <= maxSupply, "Reached max Supply");
        _safeMint(_to, _quantity);
        return totalSupply();
    }

    function setBaseUri(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    function setStep(uint _step) external onlyOwner {
        sellingStep = Step(_step);
    }

    function setMaxSupply(uint _maxSupply) external onlyOwner {
        maxSupply = _maxSupply;
    }

    function setMintamountPerwallet(uint _amount) external onlyOwner {
        mintLimit = _amount;
    }

    function tokenURI(uint _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "URI query for nonexistent token");

        // if (!revealed) {
        //     return string(abi.encodePacked(baseURI, "hidden.json"));
        // }

        return string(abi.encodePacked(baseURI, _tokenId.toString()));
    }

    function setWhitelistMerkleRoot(bytes32 _whitelistMerkleRoot) external onlyOwner {
        whitelistMerkleRoot = _whitelistMerkleRoot;
    }
    
    function setPremintMerkleRoot(bytes32 _premintMerkleRoot) external onlyOwner {
        premintMerkleRoot = _premintMerkleRoot;
    }

    function isWhiteListed(address _account, bytes32[] calldata _proof) public view returns(bool) {
        return whitelist_verify(leaf(_account), _proof);
    }

    function isPreminted(address _account, bytes32[] calldata _proof) public view returns(bool) {
        return premint_verify(leaf(_account), _proof);
    }

    function leaf(address _account) internal pure returns(bytes32) {
        return keccak256(abi.encodePacked(_account));
    }

    function whitelist_verify(bytes32 _leaf, bytes32[] memory _proof) internal view returns(bool) {
        return MerkleProof.verify(_proof, whitelistMerkleRoot, _leaf);
    }

    function premint_verify(bytes32 _leaf, bytes32[] memory _proof) internal view returns(bool) {
        return MerkleProof.verify(_proof, premintMerkleRoot, _leaf);
    }
}