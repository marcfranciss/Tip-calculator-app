import "./appInputs.css";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";

import { Inputs } from "../Utils/Inputs/Inputs";
import { AppTip } from "./AppTip/AppTip";
import { useEffect, useState } from "react";

interface AppInputProps {
  sendResult: (value: number) => void;
}
export const AppInputs = ({ sendResult }: AppInputProps) => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [numPeople, setNumPeople] = useState<string>("");

  useEffect(() => {
    const handleValues = (value1: string, value2: string) => {
      if (value1 == "" || value2 == "") {
        return;
      }
      console.log(`useeffect counter`);
      const convertedVal1 = Number(value1).toFixed(2);
      const convertedVal2 = Number(value2).toFixed(2);
      const calculatedVal = Number(convertedVal1) / Number(convertedVal2);
      sendResult(Number(calculatedVal.toFixed(2)));
    };
    handleValues(billAmount, numPeople);
  }, [billAmount, numPeople]);

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
