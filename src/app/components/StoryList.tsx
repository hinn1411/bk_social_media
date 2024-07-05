"use client";
import { addStory } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
  user: User;
};
interface StoryListProps {
  stories: StoryWithUser[];
  userId: string;
}

const StoryList = ({ stories, userId }: StoryListProps) => {
  const { user, isLoaded } = useUser();
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();
  const [optimisticStory, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  );

  const addStoryAction = async () => {
    if (!img?.secure_url) {
      return;
    }
    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: img?.secure_url || "/noAvatar.png",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null);
    } catch (err) {}
  };
  return (
    <>
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(res, { widget }) => {
          setImg(res.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col items-center gap-2 cursor-pointer relative">
              <Image
                onClick={() => open()}
                src={img?.secure_url || img?.imageUrl || "/noAvatar.png"}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2"
              />
              {img ? (
                <form action={addStoryAction}>
                  <button className="text-xs bg-blue-500 py-1 px-4 rounded-md text-white ">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a Story</span>
              )}

              <div className="absolute text-6xl text-gray-300 top-1">+</div>
            </div>
          );
        }}
      </CldUploadWidget>
      {optimisticStory.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={story.img || "/noAvatar.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
};

export default StoryList;
