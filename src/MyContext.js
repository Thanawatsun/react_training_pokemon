import { createContext } from "react";

export const MyContext = createContext({
  name: "",
  height: 0,
  sprites: "",
  hp: 0,
  maxhp: 0,
  atk: 0
});

