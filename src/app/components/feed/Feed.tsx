import Post, { FeedPostType } from "@/app/components/feed/Post";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

interface FeedProps {
  username?: string;
}
const Feed = async ({ username }: FeedProps) => {
  const { userId } = auth();
  let posts: any = [];
  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });
    const followingIds = following.map((item) => item.followingId);
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.length ? (
        posts.map((post: FeedPostType) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found!</p>
      )}
    </div>
  );
};

export default Feed;
