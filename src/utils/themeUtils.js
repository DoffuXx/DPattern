import { themes } from "./themes";

export const getThemeByName = (themeName) => {
  return themes[themeName] || {};
};
