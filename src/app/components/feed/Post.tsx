import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/14850468/pexels-photo-14850468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="user avatar"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">Tuan Hien</span>
        </div>
        <Image src="/more.png" alt="user avatar" width={16} height={16} />
      </div>
      {/* DESCRIPTION  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/25947620/pexels-photo-25947620/free-photo-of-a-road-with-trees-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quod quisquam illum illo consequuntur nulla molestias, consequatur qui
          aspernatur, porro, consectetur voluptatum eaque ratione mollitia! Ab,
          debitis eius. Repellat, cum?
        </p>
      </div>
      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50  p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              12<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
