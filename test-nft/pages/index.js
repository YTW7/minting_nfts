import dynamic from "next/dynamic";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana"
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");


const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
const Home = () => {
  const { program } = useProgram("HTgaXDiNQgSRCsyY1chq5ZLcDRBfpfvDTTAFbLX8CDwk", "nft-drop")
  const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);

  // const receiverAddress =  "8iMfec2NFKnRPX5sniq4BWfLcmjPNBJ5mL3yUvYMwWv4";
// Claim the NFTs to the specified wallet and get the mint addresses of the NFTs
//  const claimedAddresses = await program.claimTo(receiverAddress, 1);
//  console.log("Claimed NFT at address", claimedAddresses[0]);



  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div >
        <div >
          <WalletMultiButtonDynamic />
          
        
        </div>
        <h1 >Solana, meet thirdweb 👋</h1>
        <p >
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <button 
        disabled={isLoading}
        onClick={() => claim({amount: 1})}>
         Claim
        </button>
      </div>
    </>
  );
};

export default Home;
