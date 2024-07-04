"use client";

import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

interface UserInfoCardInteractionProps {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}
const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isFollowing,
  isUserBlocked,
  isFollowingSent,
}: UserInfoCardInteractionProps) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });
  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({ ...prev, blocked: !prev.blocked }));
    } catch (err) {}
  };
  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") => {
      if (value === "follow") {
        return {
          ...state,
          following: state.following && false,
          followingRequestSent:
            !state.following && !state.followingRequestSent ? true : false,
        };
      } else {
        return {
          ...state,
          blocked: !state.blocked,
        };
      }
    }
  );
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block user"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
