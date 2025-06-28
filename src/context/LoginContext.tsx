import { useContext, useState } from "react";
import { createContext } from "react";

const LoginContext = createContext<{
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}>({
  isLogin: false,
  setIsLogin: () => {},
});

export const useLoginContext = () => useContext(LoginContext);

export default LoginContext;
export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
