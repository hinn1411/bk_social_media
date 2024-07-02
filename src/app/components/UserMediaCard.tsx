import Image from "next/image";
import Link from "next/link";

interface UserMediaCardProps {
  userId: string;
}
const UserMediaCard = ({ userId }: UserMediaCardProps) => {
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
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-woman-sitting-on-the-grass.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
export default UserMediaCard;
