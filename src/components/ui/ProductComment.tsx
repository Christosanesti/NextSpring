// ProductComments.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
interface Comment {
  id: string;
  author: string;
  content: string;
}

interface ProductCommentsProps {
  initialComments: Comment[];
  onAddComment: (comment: Comment) => void;
}

const ProductComments: React.FC<ProductCommentsProps> = ({
  initialComments,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: crypto.randomUUID(),
        author: "John Doe",
        content: newComment,
      };
      onAddComment(newCommentObj);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div className="mt-4 space-y-4">
        {initialComments.map((comment) => (
          <div key={comment.id} className="flex items-start">
            <Avatar />
            <div className="ml-4">
              <div className="font-medium">{comment.author}</div>
              <div>{comment.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <Input
          value={newComment}
          onChange={(e: any) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1"
        />
        <Button onClick={handleAddComment} className="ml-4">
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default ProductComments;
