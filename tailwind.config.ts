import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #3dfbb7, #08cffd, #f16dfd, #fc846f)",
      },
    },
  },
  plugins: [],
};
export default config;
