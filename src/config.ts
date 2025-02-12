import type { ThemeObjectOrShikiThemeName } from "astro-expressive-code";

type Config = {
  author: string;
  title: string;
  description: string;
  lang: string;
  modes: {
    dark: ThemeObjectOrShikiThemeName;
    light: ThemeObjectOrShikiThemeName;
  };
};

export default {
  author: "nathy",
  title: "nathy.dev",
  description: "nathy mackinlay's personal site",
  lang: "en",
  modes: {
    dark: "dracula",
    light: "min-light",
  },
} satisfies Config;
