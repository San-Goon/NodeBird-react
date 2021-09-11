import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditform";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "팔로워1" },
    { nickname: "팔로워2" },
    { nickname: "팔로워3" },
  ];
  const followingList = [
    { nickname: "팔로워1" },
    { nickname: "팔로워2" },
    { nickname: "팔로워3" },
  ];
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
