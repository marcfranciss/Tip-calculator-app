import { ChangeEvent } from "react";
import "./inputBox.css";

interface InputBoxProps {
  imgPath?: string;
  placeholder?: string;
  inputValue?: string;
  name?: string;
  id?: string;
  isError?: boolean;
  onchange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({
  imgPath,
  placeholder,
  inputValue,
  name,
  id,
  isError,
  onchange,
}: InputBoxProps) => {
  return (
    <div className={`input-box ${isError && "error"} `}>
      <img src={imgPath} alt='' />
      <input
        type='text'
        name={name}
        id={id}
        value={inputValue}
        placeholder={placeholder}
        onChange={onchange}
        required
      />
    </div>
  );
};
