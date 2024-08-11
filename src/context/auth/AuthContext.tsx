import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { handleLogin } from "../../components/userData";
import { notification } from "antd";
import { checkToken } from "../../services/authService";
import { useNavigate } from "react-router-dom";
type TAuthContext = {
  userData: Record<any, any> | undefined;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
  handleSubmit: () => void;
};



const defaultProvider: Partial<TAuthContext> = {};

const AuthContext = createContext(defaultProvider);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = (props: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<Record<any, any> | undefined>();
  
  const navigate = useNavigate()
    


    

  const CheckToken = async () => {
    checkToken()
      .then((res) => {
        if (res.data.user) {
          setUserData(res.data.user);
          navigate('/admin')
        } else {
          notification.error({ message: "توکن منقضی است" });
          setUserData(undefined);
          localStorage.removeItem("token");
          navigate('/login')

        }
      })
      .catch(() => {
        notification.error({ message: "توکن منقضی است" });
        setUserData(undefined);
        localStorage.removeItem("token");
        navigate('/login')

      });
  };
  const token = localStorage.getItem("token")
  useEffect(() => {
    CheckToken();
  }, [token]);

  const handleSubmit = () => {
    handleLogin({
      email,
      password,
      failed: (res) => {
        notification.error({
          message: "نام کاربری یا رمز عبور اشتباه است",
        });
      },

      success: (res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
            CheckToken()
        } else {
          notification.error({
            message: "توکن دریافت نشد!",
          });
        }
      },
    });
  };

  const { children } = props;

  const value: TAuthContext = {
    email,
    handleSubmit,
    password,
    setEmail,
    setPassword,
    userData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
