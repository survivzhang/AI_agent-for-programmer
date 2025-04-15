import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App router 文件夹下所有组件和页面
    "./pages/**/*.{js,ts,jsx,tsx}", // 兼容 pages router（如果有）
    "./components/**/*.{js,ts,jsx,tsx}", // 组件文件夹
    "./styles/**/*.{css,scss}", // 样式文件（如 global.css）
  ],
  theme: {
    extend: {
      colors: {
        // 🌐 Primary brand color
        primary: {
          DEFAULT: "#3B82F6",
          light: "#E0ECFF",
        },

        // 💜 Secondary accent color
        secondary: {
          DEFAULT: "#8B5CF6",
          light: "#EDE9FE",
        },

        // 💚 Success/Accent color
        accent: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },

        // 🪟 Layout and structure
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E5E7EB",
        shadow: "rgba(0, 0, 0, 0.05)",

        // ✍️ Text and UI content
        text: "#111827",
        muted: "#64748B",
        disabled: "#9CA3AF",
        link: "#3B82F6",

        // 🔔 Feedback and status
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
};

export default config;
