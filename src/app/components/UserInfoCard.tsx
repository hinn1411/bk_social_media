import Image from "next/image";
import Link from "next/link";

interface UserInfoCardProps {
  userId: string;
}
const UserInfoCard = ({ userId }: UserInfoCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Jacques Giang</span>
          <span className="text-sm">@tuanhien1233</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat enim
          et similique saepe earum nulla repellat
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in{" "}
            <span>
              <b>Ho Chi Minh City</b>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to{" "}
            <span>
              <b>An Bien High School</b>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at{" "}
            <span>
              <b>Devers Inc.</b>
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://hinn1411.github.io/threejs-portfolio/"
              className="text-blue-500 font-medium"
            >
              hinn1411.github.io/threejs-portfolio
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};
export default UserInfoCard;
