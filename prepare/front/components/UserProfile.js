import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const logOutLoading = useSelector((state) => state.user.logOutLoading);
  const me = useSelector((state) => state.user.me);

  const onLogOut = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="following">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

UserProfile.propTypes = {
  logOutLoading: PropTypes.func.isRequired,
};

export default UserProfile;
