 NFT maketplace NOTE:
 =======================
 try running some of the following tasks:

 ````shell
  npx hardhat help
  npx hardhat test
  REPORT_GAS =true npx hardhat test
    
   //project dakanor somay terminal a open korbo-->
------------------------------------------------ 
    npm run dev
    npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost     deploy korlam contract then get the address

  NFTMarketplace deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

Pinata uploads
--------------
Create a Pinata JWT with permission to pin files (`pinFileToIPFS`) and JSON
(`pinJSONToIPFS`), then copy `.env.example` to `.env.local` and set `PINATA_JWT`.
Do not use a `NEXT_PUBLIC_` prefix: the JWT must remain server-side. Restart the
dev server after changing environment values.

The app sends both NFT images and metadata through `/api/pinata/upload`; the
Pinata gateway is configured for Next.js image previews. Never commit `.env.local`.