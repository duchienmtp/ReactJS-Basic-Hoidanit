import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRedux } from "../redux/actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state) => state.user.isLoading);
  const account = useSelector((state) => state.user.account);

  const handleLogin = async () => {
    try {
      if (!email && !password) {
        if (!email.includes("@reqres.in")) {
          toast.error("Wrong email format!");
          return;
        }
      }

      // "eve.holt@reqres.in"
      dispatch(handleLoginRedux(email, password));

      // let res = await loginAPI(email.trim(), password);
      // console.log(">>> Check res: ", res);
      // if (res && res.token) {
      //   loginContext(email, res.token);
      //   navigate("/");
      // } else {
      //   if (res && res.status === 400) {
      //     toast.error(res.data.error);
      //   }
      // }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);

  return (
    <>
      <div className="login-container d-flex flex-column align-items-center">
        <div className="title">Login</div>
        <div className="text">Email or username (eve.holt@reqres.in)</div>
        <input
          type="email"
          placeholder="Username or Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="">Password</div>
        <div className="input-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            className={
              showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
            }
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {isLoading && <i className="fas fa-spinner fa-spin"></i>}
          &nbsp; Login
        </button>
        <div className="back">
          <i className="fa-solid fa-chevron-left"></i>
          &nbsp;
          <span onClick={() => handleGoBack()}>Go back</span>
        </div>
      </div>
    </>
  );
};

export default Login;
