import React, { useState, useEffect } from "react";
import headerIcon from "../../image/light_king.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ethers} from "ethers";
import contract from "../../ABI/kings.json";
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
const { MerkleTree } = require("merkletreejs");
const keccak256 = require('keccak256');

const preAddresses = contract.premint;
console.log("pre addresses", preAddresses);
  const preleafNodes = preAddresses.map(addr => keccak256(addr));
  console.log("pre leaf node", preleafNodes);
  const premerkleTree = new MerkleTree(preleafNodes, keccak256, { sortPairs: true });
  console.log("per merkleTree", premerkleTree);
  var prehash = premerkleTree.getHexRoot();
  console.log("prehash",prehash);
  var proof = premerkleTree.getHexProof(keccak256("0xF170dCd31C71d7008F5eAaB197b03c4DE10ecB9d"));
  console.log("preproof sdfsdf", proof);

const Main = () => {
  const [inputValue, setInputValue] = useState(1);
  const [chainId, setChainId] = useState();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState();
  const [signer, setSigner] = useState();
  const [whiteProof, setWhiteProof] = useState([]);
  const [preProof, setPreProof] = useState([]);

  const addmintAmount = (e) => {
    setInputValue(e);
  };

  useEffect(() => {
    if (chainId !== undefined && chainId !== 4) {
      toast.warn('Please choose the Rinkeby network!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  }, [chainId])

  const connectWallet = async () => {

    const metamaskProvider = window.ethereum;
    
    await metamaskProvider.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(metamaskProvider);
    const signer_metamask = provider.getSigner();
    setSigner(signer_metamask);
    const currentAccount = await signer_metamask.getAddress()
    setWalletAddress(currentAccount);
    console.log("current account", currentAccount);
    
    const { chainId } = await provider.getNetwork();
    
    setChainId(chainId);
    setWalletConnected(true);

    const preAddresses = contract.premint;
    const preleafNodes = preAddresses.map(addr => keccak256(addr));
    const premerkleTree = new MerkleTree(preleafNodes, keccak256, { sortPairs: true });
    var preProof = premerkleTree.getHexProof(keccak256("0xF170dCd31C71d7008F5eAaB197b03c4DE10ecB9d"));
    setPreProof(preProof);
    console.log("preproof sdfsdf", preProof);

    const whitelistAddresses = contract.whitelist;
    const whitelistleafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const whitelistmerkleTree = new MerkleTree(whitelistleafNodes, keccak256, { sortPairs: true });
    setWhiteProof(whitelistmerkleTree.getHexProof(keccak256(currentAccount)));
    console.log("white proof", whitelistmerkleTree.getHexProof(keccak256(currentAccount)));
  }

  const createNFT = async () => {
    if (!walletConnected) {
      toast.warn('Please connect your wallet!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
      return;
    }

    if (chainId == undefined || chainId !== 4) {
      toast.warn('Please choose the Rinkeby network!', {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
      return;
    }
    const nftContract = new ethers.Contract(contract.address, contract.abi, signer);
    const step = await nftContract.sellingStep();
    if(step == 0){
      toast.warn("The mint has not started yet.", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
      });
      return;
    } else if(step == 1){
      console.log("Pre proof", preProof);
      // try{
      //   await nftContract.preMint(inputValue, proofAddress);
      //   // nftContract.on("mint", (address, event) => {
      //   //   toast.success('Success Full mint!', {
      //   //     position: "top-right",
      //   //     autoClose: 3000,
      //   //     closeOnClick: true,
      //   //     hideProgressBar: true,
      //   //   });
      //   // });
      // } catch(error){
      //   if (error["code"] === 4001) {
      //     toast.error(error["message"].split(":")[1], {
      //       position: "top-right",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: 0,
      //       theme: "dark",
      //       transition: Flip,
      //     });
      //   } else {
      //     console.log("Error",error["message"].split(":")[16].split('"')[0]);
      //     toast.error(error["message"].split(":")[16].split('"')[0], {
      //       position: "top-right",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: 0,
      //       theme: "dark",
      //       transition: Flip,
      //     });
      //   }
      // }
    } else if(step == 2){

      try{
        await nftContract.whitelistMint(inputValue, );
        // nftContract.on("mint", (address, event) => {
        //   toast.success('Success Full mint!', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     closeOnClick: true,
        //     hideProgressBar: true,
        //   });
        // });
      } catch(error){
        if (error["code"] === 4001) {
          toast.error(error["message"].split(":")[1], {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Flip,
          });
        } else {
          console.log("Error",error["message"].split(":")[16].split('"')[0]);
          toast.error(error["message"].split(":")[16].split('"')[0], {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Flip,
          });
        }
      }
    }
  }

  return (
    <section className="mintCalculationSection">
      <ToastContainer/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <img src={headerIcon} alt="header-Icon" />
              <h3>
                Mint Your Favourite <span>Little Kings</span>
              </h3>
            </div>
            <div className="priceSection">
              <h4>
                <span>Price : </span>Free + Gas
              </h4>

              <div className="numbers">
                <div className="inputNumber">
                  <button type="button" onClick={() =>addmintAmount(1)}>
                    -
                  </button>
                  <input type="text" value={inputValue} disabled />
                  <button type="button" onClick={() =>addmintAmount(2)}>
                    +
                  </button>
                </div>
              </div>
              {!walletConnected?
              <Link disable to="" className="Wallet" onClick={() => connectWallet()}>
                <span>
                  Connect Wallet
                  <div className="yl_bg">
                    <span></span>
                  </div>
                </span>
              </Link>
              :
              <Link disable to="" className="Wallet" onClick={() => connectWallet()}>
                <span>
                  Mint
                  <div className="yl_bg">
                    <span></span>
                  </div>
                </span>
              </Link>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
