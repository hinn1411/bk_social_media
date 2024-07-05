"use client";

import { deletePost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

interface PostInfoProps {
  postId: number;
}
const PostInfo = ({ postId }: PostInfoProps) => {
  const [open, setOpen] = useState(false);
  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className="relative">
      <Image
        onClick={() => setOpen((prev) => !prev)}
        src="/more.png"
        alt="more action"
        width={16}
        height={16}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-port</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
