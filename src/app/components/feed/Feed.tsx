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
    const ids = [userId, ...followingIds];
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
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
    <div className="flex flex-col gap-6">
      {posts.length ? (
        posts.map((post: FeedPostType) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found!</p>
      )}
    </div>
  );
};

export default Feed;
