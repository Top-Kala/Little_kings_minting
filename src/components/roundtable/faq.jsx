import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <section className="roundtableFaqSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3>
              Frequently Asked <span>Questions</span>
            </h3>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are The Little Kings?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      The Little Kings is a PFP passion project on the Ethereum network.
                    </li>
                    <li>
                      It is the ultimate representation for creatives, executors, and dreamers.
                    </li>
                    <li>
                      To find out more check out the " Law of the Land "
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the size of The Little Kings Collection?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      4444 Little Kings will be roaming the kingdom
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What BlockChain will The Little Kings Collection be on?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Ethereum
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How Can I mint a Little King NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      1. It will be a free mint. Make sure you have enough for gas.
                    </li>
                    <li>
                      2. Load your Meta mask wallet {" "}
                      <span>(DO NOT MINT FROM AN EXCHANGE)</span>
                    </li>
                    <li>
                      3. Click mint through the official mint link (To Be Announced)
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Where can I Mint a Little King NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Minting will take place on the Little king's website link (To Be Announced)
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How many Little Kings can I mint?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      You can mint up to 2 Little Kings per wallet
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How much does it cost to mint a Little King NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Free
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Who created the art for The Little Kings NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Little kings were drawn by the founding little king Dontworryaboutit.eth
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Who is the Founder of the Little Kings NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Dontworryaboutit.eth (yes this is his name lol)
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Where else can I purchase a Little King NFT?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ol>
                    <li>
                      Little king's website link (To Be Announced)
                    </li>
                    <li>
                      The Little King's will also be available on secondary markets (To Be Announced)
                    </li>
                  </ol>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
