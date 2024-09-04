import { ChangeEvent, useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import { InputText } from "../InputText/InputText";
import "./appTip.css";

const tipOptionsArr = ["5%", "10%", "15%", "25%", "50%"];

export const AppTip = () => {
  const [tipPercent, setTipPercent] = useState<string>("");
  const [isCostum, setIsCostum] = useState<boolean>(false);

  const handleTips = (e: ChangeEvent<HTMLInputElement>) => {
    tipPercent != "" ? setIsCostum(true) : setTipPercent(e.target.value);
  };
  return (
    <div className='app-tip'>
      <div className='text-container'>
        <InputText text={"Select Tip %"} />
        {/* <ErrorMsg/> */}
      </div>
      <div className='tip-options'>
        {tipOptionsArr.map((options, index) => {
          return (
            <label key={index} htmlFor={`tip-${options}`} className='tip-radio'>
              <input
                type='radio'
                name='tip-radio'
                id={`tip-${options}`}
                value={options}
                disabled={isCostum}
              />
              {options}
            </label>
          );
        })}
        <label htmlFor='tip-costum'>
          <InputBox
            name='tip-radio'
            id='tip-costum'
            placeholder='Costum'
            inputValue={tipPercent}
            onchange={(e) => handleTips(e)}
          />
        </label>
      </div>
    </div>
  );
};
