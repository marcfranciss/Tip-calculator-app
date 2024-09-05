import "./appTip.css";
import { ChangeEvent, useEffect, useState } from "react";
import { InputText } from "../InputText/InputText";

import { useInputContext } from "../../../Context/InputContext";

const tipOptionsArr = ["5", "10", "15", "25", "50"];

export const AppTip = () => {
  const [isCostum, setIsCostum] = useState<boolean>(false);
  const { costumVal, setCostumVal, setPercentVal } = useInputContext();

  useEffect(() => {
    if (Number(costumVal) > 0) {
      setPercentVal(Number(costumVal));
      setIsCostum(true);
    } else {
      setIsCostum(false);
    }
  }, [costumVal]);

  /* Radio elements: Send value for calculation and its value*/
  const handleRadioVal = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPercentVal(Number(value));
    setCostumVal("");
  };

  /* Custom : 
  ~ sanitizedValue : Sanitize/Clean the value by removing non-numeric value.
  ~ setCustomVal(sanitizedValue) : Sends the value for calculation and its 'Costum' value */
  const handleTips = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^0-9.]+/g, "").trim();
    setCostumVal(sanitizedValue);
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
                onChange={handleRadioVal}
              />
              {`${options}%`}
            </label>
          );
        })}
        <div className={`input-box`}>
          <label htmlFor='tip-costum'>
            <input
              type='text'
              name='tip-radio'
              id='tip-costum'
              placeholder='Costum'
              value={costumVal}
              onChange={handleTips}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
