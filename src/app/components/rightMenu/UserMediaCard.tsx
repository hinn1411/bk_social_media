import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface UserMediaCardProps {
  user: User;
}
const UserMediaCard = async ({ user }: UserMediaCardProps) => {
  const postWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex justify-between items-center font-medium">
        <span>User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom  */}
      <div className="flex gap-4 justify-start flex-wrap">
        {postWithMedia.length ? (
          postWithMedia.map((post) => (
            <div key={post.id} className="relative w-1/4 h-24">
              <Image
                src={post.img!}
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <p>No media found!</p>
        )}
      </div>
    </div>
  );
};
export default UserMediaCard;
