import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "screenshots/**", "next-env.d.ts"]
  },
  ...nextVitals
];

export default eslintConfig;
