export const THEMES = {
  anime: {
    prim: "anime-prim",
    sec: "anime-sec",
    ter: "anime-ter",
  },
  serial: {},
  movie: {},
  def: {
    prim: "gray-800",
    sec: "gray-800",
    ter: "gray-700",
  },
};

export const getThemeForUrl = (url) => {
  if (url.includes("anime")) return THEMES.anime;
  return THEMES.def;
};
