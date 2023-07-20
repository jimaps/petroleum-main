import { atom, selector } from "recoil";

export const GlobalProgressAtom = atom({
  key: "globalProgress",
  default: false,
});

export const GlobalLoadingAtom = atom({
  key: "globalLoading",
  default: false,
});

export const AppBarOpenAtom = atom({
  key: "appBarOpen",
  default: window.matchMedia("(min-width:900px)").matches,
});
