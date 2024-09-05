import "./appInputs.css";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";

import { Inputs } from "../Utils/Inputs/Inputs";
import { AppTip } from "./AppTip/AppTip";
import { useEffect, useState } from "react";
import { useInputContext } from "../../Context/InputContext";

export const AppInputs = () => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [numPeople, setNumPeople] = useState<string>("");
  const { percentVal, setResult, setDisableReset, setTipAmountPP } =
    useInputContext();

  useEffect(() => {
    const handleValues = (value1: string, value2: string, value3: number) => {
      const convertedVal1 = Number(value1);
      const convertedVal2 = Number(value2);
      const convertedVal3 = Number(value3) / 100;
      if (Number(value1) > 0 && Number(value2) > 0) {
        const percentageVal = (convertedVal1 * convertedVal3) / convertedVal2;
        const perPersonVal = Number(convertedVal1) / Number(convertedVal2);
        const totalVal = perPersonVal + percentageVal;
        console.log(
          `Amount: ${convertedVal1}\n
          NumPeople: ${value2}\n 
          Prcntage: ${convertedVal3}\n --- \n
          Tip/p: ${percentageVal}\n
          Total/p (w/o tip): ${perPersonVal}\n
          Total/p: ${totalVal}`
        );

        setTipAmountPP(percentageVal);
        setResult(Number(totalVal.toFixed(2)));
        setDisableReset(false);
      }
    };
    handleValues(billAmount, numPeople, percentVal);
  }, [billAmount, numPeople, percentVal]);

  return (
    <div className='app-inputs'>
      <Inputs
        text='Bill'
        imgPath={dollar}
        htmlFor='bill'
        forComputation={setBillAmount}
      />
      <AppTip />
      <Inputs
        text='Number of People'
        imgPath={person}
        htmlFor='people'
        forComputation={setNumPeople}
      />
    </div>
  );
};
