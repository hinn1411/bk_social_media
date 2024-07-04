import prisma from "@/lib/client";
import Image from "next/image";
import CommentList from "./CommentList";

interface CommentsProps {
  postId: number;
}
const Comments = async ({ postId }: CommentsProps) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div>
      {/* WRITE  */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
