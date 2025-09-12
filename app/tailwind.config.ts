import type { Config } from "tailwindcss";


const config: Config = {
darkMode: ["class"],
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
primary: {
DEFAULT: "#111827", // near-black
50: "#F6F7F9",
100: "#E9EBF0",
200: "#C9CFDA",
300: "#A9B4C5",
400: "#8B9AB1",
500: "#6E819D",
600: "#536887",
700: "#3C506B",
800: "#27384D",
900: "#111827"
},
accent: {
DEFAULT: "#3B82F6"
}
},
boxShadow: {
soft: "0 6px 24px rgba(0,0,0,0.08)",
},
borderRadius: {
xl2: "1.25rem"
}
}
},
plugins: []
};
export default config;