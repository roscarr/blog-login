import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const Context=()=>{
  const context=useContext(UserContext)
  if (!context) throw new Error("useTask must use within a provider")
  return context
}
export const UserContextProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo ,setuserInfo}}>{children}</UserContext.Provider>
  );
};
