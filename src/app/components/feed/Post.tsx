import Image from "next/image";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import { Suspense } from "react";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

export type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: {
    comments: number;
  };
};
interface PostProps {
  post: FeedPostType;
}
const Post = ({ post }: PostProps) => {
  const { userId } = auth();
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt="user avatar"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? `${post.user.name} ${post.user.surname}`
              : post.user.username}
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      {/* DESCRIPTION  */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* INTERACTION  */}
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((item) => item.userId)}
          commentNumber={post._count.comments}
        />
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default Post;
