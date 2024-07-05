"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();
  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST  */}
      <div className="flex-1">
        {/* TEXT INPUT  */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            name="desc"
            placeholder="What's on your mind?"
            className="flex-1 p-2 bg-slate-100 rounded-lg"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div>
            <Image
              src="/emoji.png"
              width={20}
              height={20}
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(res, { widget }) => {
              setImg(res.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  <span>Photo</span>
                </div>
              );
            }}
          </CldUploadWidget>

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
