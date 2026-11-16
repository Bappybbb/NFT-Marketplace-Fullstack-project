 import React from 'react'
 
 //INTERNAL imporrt
 import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";

 const Home = () => {
   return (
     <div className={Style.homePage}>
       <HeroSection />
       <Service />
       <BigNFTSlider />
       <Title
         heading="Latest Audio Collection"
         paragraph="Discover the most outstanding NFTs in all topic of life"
       />
       <AudioLive />
       <Title
         heading="New Collections"
         paragraph="Discover the most outstanding NFTs in all topic of life"
       />
       <NFTCard />
       {/* <Title
         heading="Filter By Collection"
         paragraph="Discover the most outstanding NFTs in all topic of life"
       /> */}
       <FollowerTab />
       {/* <Title
         heading="Explore NFTs Videos"
         paragraph="Click on play icon and enjoy NFTs video"
       /> */}
       <Slider />
       <Collection />
       <Title
         heading="Feature NFTs"
         paragraph="Discover the most outstanding NFTs in all topic of life"
       />
       <Filter />
       <Title
         heading="Browse by category"
         paragraph="Explore the NFTs in the most featured categorieds."
       />
       <Category />
       <Subscribe />
       <Brand/>
       <Video/>
     </div>
   );
 }
 
 export default Home
 