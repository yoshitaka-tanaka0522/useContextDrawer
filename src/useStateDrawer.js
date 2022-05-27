import { createContext, useState } from "react";

export const OpenContext = createContext({});

export const OpenProvider = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {props.children}
    </OpenContext.Provider>
  );
};
