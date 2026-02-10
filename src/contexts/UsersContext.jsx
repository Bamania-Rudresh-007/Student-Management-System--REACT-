import { createContext, useContext, useEffect, useState } from "react";
import useLocalUsers from "./useLocalUsers";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [member, setMember] = useLocalUsers();

  const arrayOfMember = (data) => {
    const dataArray = Array.isArray(data) ? data : [data];

    return dataArray.map((element, index) => {
      return { ...element, id: Date.now() + index };
    });
  };

  const values = {
    member,
    setMember,
    arrayOfMember,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within UsersProvider");
  }

  return context;
}
