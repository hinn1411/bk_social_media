import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

interface UserInfoCardProps {
  user: User;
}
const UserInfoCard = async ({ user }: UserInfoCardProps) => {
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isSentRequest = false;

  const { userId: currentUserId } = auth();
  if (currentUserId) {
    const blockResponse = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });
    if (blockResponse) {
      isUserBlocked = true;
    }
    const followingResponse = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    if (followingResponse) {
      isFollowing = true;
    }
    const followRequestResponse = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    if (followRequestResponse) {
      isSentRequest = true;
    }
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
        )}
      </div>
      {/* Bottom  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user.name && user.surname
              ? `${user.name} ${user.surname}`
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in{" "}
              <span>
                <b>{user.city}</b>
              </span>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to{" "}
              <span>
                <b>{user.school}</b>
              </span>
            </span>
          </div>
        )}

        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at{" "}
              <span>
                <b>{user.work}</b>
              </span>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between flex-wrap gap-4">
          {user.website && (
            <div className="flex gap-2 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link
                target="_blank"
                href={user.website}
                className="text-blue-500 font-medium"
              >
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex gap-2 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        {currentUserId && currentUserId !== user.id && (
          <UserInfoCardInteraction
            userId={user.id}
            currentUserId={currentUserId}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isSentRequest}
          />
        )}
      </div>
    </div>
  );
};
export default UserInfoCard;
