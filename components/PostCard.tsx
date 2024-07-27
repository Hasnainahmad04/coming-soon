import { Post } from "@/types";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="p-2 my-2">
      <h2 className="text-2xl font-medium line-clamp-2">{post.title}</h2>
      <p className="line-clamp-3 text-sm text-black/80 mt-2">{post.body}</p>
      <div className="flex gap-4 my-2">
        {post.tags.map((tag) => (
          <span
            className="bg-neutral-200 py-1 px-3 rounded-full text-sm capitalize text-black/80"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-gray-500 me-2">
        <EyeIcon />
        {post.views}
      </span>
      <span className="inline-flex items-center gap-1 text-gray-500">
        <LikeIcon />
        {post.reactions.likes}
      </span>
    </article>
  );
};

export default PostCard;

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-gray-500"
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-gray-500"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
