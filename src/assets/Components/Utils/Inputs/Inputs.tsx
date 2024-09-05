import "./inputs.css";
import { ChangeEvent, useEffect, useState } from "react";
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
  const {
    resetValue,
    setDisableReset,
    setPercentVal,
    setResetValue,
    setResult,
    setTipAmountPP,
    setCostumVal,
  } = useInputContext();

  useEffect(() => {
    const removeChecked = () => {
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => input.removeAttribute("disabled"));
      const inputsChcked = document.querySelectorAll("input:checked");
      inputsChcked.forEach(
        (chkd) => ((chkd as HTMLInputElement).checked = false)
      );
    };
    if (resetValue) {
      /* running the above function -- resets the radio buttons */
      removeChecked(),
        /* Resets the amounts */
        setAmount(""),
        setCostumVal(""),
        forComputation(""),
        setPercentVal(0),
        setTipAmountPP(0),
        setResult(0),
        /* Resets error */
        setIsError(false),
        setErrorMsg(""),
        /* Resets the reset button*/
        setDisableReset(true),
        setResetValue(false);
    }
  }, [resetValue]);
  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const { errorMsg, isError, sanitizedValue } = inputValidator(
      event.target.value
    );
    const cleanedVal = Number(sanitizedValue);
    console.error(cleanedVal);
    cleanedVal >= 1000
      ? setAmount(cleanedVal.toLocaleString())
      : setAmount(sanitizedValue);
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
