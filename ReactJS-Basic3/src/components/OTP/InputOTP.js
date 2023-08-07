import { useState, useRef } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState("");

  const handleOnChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp);
  };

  const handleClearBtn = () => {
    childRef.current.resetTimer();
  };

  const handleConfirmOTP = () => {
    props.handleSubmitOTP();
  };

  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleOnChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
        renderInput={(props) => <input {...props} />}
      />

      <div className="timer">
        {/* <CountDown setIsDisableBtn={props.setIsDisableBtn} /> */}
        <CountDownAnimation
          ref={childRef}
          setIsDisableBtn={props.setIsDisableBtn}
        />
      </div>

      <div className="action">
        <button
          className="clear"
          onClick={handleClearBtn}
          disabled={!props.isDisableBtn}
        >
          Clear
        </button>
        <button
          className="confirm"
          disabled={props.isDisableBtn}
          onClick={() => handleConfirmOTP()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
