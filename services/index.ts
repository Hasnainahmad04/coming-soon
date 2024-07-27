import { INITIAL_LIMIT } from "@/constants";
import { PostResponse } from "@/types";

if (!process.env.BASE_URL) {
  throw Error("Missing Base url");
}
const BaseURL = process.env.BASE_URL;

export const getPosts = async (page: number) => {
  const offset = INITIAL_LIMIT * (page - 1);
  try {
    const res = await fetch(
      `${BaseURL}/posts?limit=${INITIAL_LIMIT}&skip=${offset}`
    );
    const posts: PostResponse = await res.json();
    return posts;
  } catch (error) {}
};
