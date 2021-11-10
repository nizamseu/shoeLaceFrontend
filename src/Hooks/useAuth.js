import { useContext } from "react";
import { AuthContext } from "../Components/ContextProvider/ContextProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
