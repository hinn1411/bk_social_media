import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26646646/pexels-photo-26646646/free-photo-of-a-boat-traveling-through-the-water-near-a-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full "
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR  */}
        <Image
          src="https://images.pexels.com/photos/26201692/pexels-photo-26201692/free-photo-of-a-woman-in-a-wedding-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full "
        />
        {/* DESCRIPTION  */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">James Giang</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis
            earum magnam velit assumenda. Minus, molestiae officia odit
            laudantium laboriosam eligendi omnis aspernatur eos, fuga iure
            nostrum id delectus officiis?
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                height={12}
                width={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">12 Likes</span>
            </div>
            <div>Reply</div>
          </div>
        </div>
        {/* ICON  */}
        <Image
          src="/more.png"
          alt=""
          height={16}
          width={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
