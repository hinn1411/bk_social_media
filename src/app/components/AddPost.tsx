import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
  const { userId } = auth();
  console.log(`AddPost.tsx, userId = ${userId}`);

  const testAction = async (formData: FormData) => {
    "use server";
    if (!userId) {
      return;
    }
    const desc = formData.get("desc") as string;
    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
        },
      });
      console.log(res);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/14081998/pexels-photo-14081998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST  */}
      <div className="flex-1">
        {/* TEXT INPUT  */}
        <form action={testAction} className="flex gap-4">
          <textarea
            name="desc"
            placeholder="What's on your mind?"
            className="flex-1 p-2 bg-slate-100 rounded-lg"
          />
          <Image
            src="/emoji.png"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* POST OPTIONS  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
