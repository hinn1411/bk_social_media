import Ad from "./Ad";
import BirthDays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

interface RightMenuProps {
  userId: string;
}
const RightMenu = ({ userId }: RightMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ad />
    </div>
  );
};

export default RightMenu;
