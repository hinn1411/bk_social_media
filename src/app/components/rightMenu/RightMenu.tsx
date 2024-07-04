import { User } from "@prisma/client";
import Ad from "../Ad";
import BirthDays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { Suspense } from "react";

interface RightMenuProps {
  user?: User;
}
const RightMenu = ({ user }: RightMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
