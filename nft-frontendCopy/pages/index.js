import React, { useContext, useEffect } from "react";
// INTERNAL IMPORT
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

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIFWalletConnected } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    checkIFWalletConnected();
  }, []);

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
      <FollowerTab />
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
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
