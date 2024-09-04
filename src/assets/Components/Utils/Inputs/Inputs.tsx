import "./inputs.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { InputBox } from "../../AppInputs/InputBox/InputBox";
import { InputText } from "../../AppInputs/InputText/InputText";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import { inputValidator } from "../inputValidator";
import { useInputContext } from "../../../Context/InputContext";

interface InputProps {
  text: string;
  imgPath: string;
  htmlFor?: string;
  forComputation: (value: string) => void;
}

export const Inputs = ({
  text,
  imgPath,
  htmlFor,
  forComputation,
}: InputProps) => {
  const [amount, setAmount] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { resetValue, setEnableReset, setResetValue } = useInputContext();

  useEffect(() => {
    resetValue &&
      (setAmount(""),
      setIsError(false),
      setErrorMsg(""),
      setEnableReset(true),
      forComputation(""),
      setResetValue(false));
  }, [resetValue]);
  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const { errorMsg, isError, sanitizedValue } = inputValidator(
      event.target.value
    );
    console.log(`Amount check: ${sanitizedValue}`);
    const cleanedVal = Number(sanitizedValue).toLocaleString();
    setAmount(cleanedVal);
    setErrorMsg(errorMsg);
    setIsError(isError);
    forComputation(sanitizedValue);
  };
  return (
    <label htmlFor={htmlFor} className='input-data'>
      <div className='input-text-container'>
        <InputText text={text} />
        <ErrorMsg text={errorMsg} />
      </div>
      <InputBox
        imgPath={imgPath}
        id={htmlFor}
        name={htmlFor}
        inputValue={amount}
        placeholder='0'
        isError={isError}
        onchange={handleAmount}
      />
    </label>
  );
};
