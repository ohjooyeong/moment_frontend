import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 사용자 정의 클래스 추가

      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#04B8AB",
          foreground: "#04B8AB",
          main: "#04B8AB",
          sub: "#A9EFEB",
        },
        customBlack: {
          1: "#161D24",
          2: "#28303A",
          3: "#353D49",
          4: "#4A515A",
        },
        customGray: {
          1: "#656F7C",
          2: "#A0A6B6",
          3: "#C5C8CE",
        },
        customWhite: {
          1: "#ffffff",
          2: "#F2F3F6",
          3: "#E9EBEE",
        },

        secondary: {
          DEFAULT: "#FE2E6B",
          foreground: "#FE2E6B",
          main: "#FE2E6B",
          sub: "#FF98B6",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities(
        {
          ".moment-container::before": {
            content: '""',
            left: "50%",
            transform: "translateX(-288px)",
            width: "1px",
            position: "fixed",
            top: "0px",
            bottom: "0px",
            backgroundColor: "#E9EBEE",
            zIndex: "99999",
          },
          ".moment-container::after": {
            content: '""',
            right: "50%",
            transform: "translateX(288px)",
            width: "1px",
            position: "fixed",
            top: "0px",
            bottom: "0px",
            backgroundColor: "#E9EBEE",
            zIndex: "99999",
          },
        },
        ["before", "after"]
      );
    },
  ],
} satisfies Config;

export default config;
