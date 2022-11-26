import { atom } from "jotai";

export const textAtom = atom<string>("");
// export const textLengthAtom = atom<number>((get) => {
//   return get(textAtom).length;
// });
// export const upperCaseAtom = atom<string>((get) => {
//   return get(textAtom).toUpperCase();
// });

export const textLengthAtom = atom<number>((get) => {
  return get(textAtom).length;
});

export const upperCaseAtom = atom<string>((get) => {
  return get(textAtom).toUpperCase();
});
