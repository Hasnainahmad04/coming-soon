import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import Skeleton from "@/components/Skeleton";
import { getPosts } from "@/services";
import { Post } from "@/types";
import React, { Suspense } from "react";

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="flex flex-col gap-4 divide-y-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

const Skeletons = () => {
  return (
    <section className="flex flex-col gap-4 divide-y-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </section>
  );
};

const Posts = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = Number(searchParams.page) || 1;
  const data = await getPosts(page);

  if (!data) {
    return <p>Error While fetching posts</p>;
  }
  return (
    <main className="px-4 bg-white">
      <h2 className="text-black p-2 text-2xl font-semibold">Posts</h2>
      <Suspense fallback={<Skeletons />}>
        <PostsList posts={data.posts} />
      </Suspense>
      <Pagination totalItems={data.total} />
    </main>
  );
};

export default Posts;
