import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "gray-800": "#2d3748",
        "green-600": "#16a34a",
        "green-500": "#22c55e",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular"],
        sans: ["ui-sans-serif", "system-ui"],
        semibold: ["ui-semibold", "system-ui"],
      },
      borderRadius: {
        md: "0.375rem",
      },
      boxShadow: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
