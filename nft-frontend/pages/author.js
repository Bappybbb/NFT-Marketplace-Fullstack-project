import React, { useState } from "react";

import Style from "../styles/author.module.css";
import { Banner } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import FollowerTabStyle from "../components/FollowerTab/FollowerTab.module.css";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTab,
  AuthorNFTCardBox,
} from "../authorPages/componentIndex";

const Author = () => {
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  const popularCreators = [
    { background: images.creatorbackground1, user: images.user1 },
    { background: images.creatorbackground2, user: images.user2 },
    { background: images.creatorbackground3, user: images.user3 },
    { background: images.creatorbackground4, user: images.user4 },
    { background: images.creatorbackground5, user: images.user5 },
    { background: images.creatorbackground6, user: images.user6 },
  ];

  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTab
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="popular Creators"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />
      <div className={FollowerTabStyle.followerTab_box}>
        {popularCreators.map((el, i) => (
          <FollowerTabCard key={i} i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default Author;
