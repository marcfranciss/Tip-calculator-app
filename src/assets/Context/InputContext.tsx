import { createContext, ReactNode, useContext, useState } from "react";

interface InputContextType {
  percentVal: number;
  setPercentVal: (value: number) => void;
  disableReset: boolean;
  setDisableReset: (value: boolean) => void;
  resetValue: boolean;
  setResetValue: (value: boolean) => void;
  result: number;
  setResult: (value: number) => void;
  tipAmountPP: number;
  setTipAmountPP: (value: number) => void;
  customVal: string;
  setCustomVal: (value: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

interface InputProviderProps {
  children: ReactNode;
}
export const InputProvider = ({ children }: InputProviderProps) => {
  const [percentVal, setPercentVal] = useState<number>(0);
  const [disableReset, setDisableReset] = useState<boolean>(true);
  const [resetValue, setResetValue] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [tipAmountPP, setTipAmountPP] = useState<number>(0);
  const [customVal, setCustomVal] = useState<string>("");

  return (
    <InputContext.Provider
      value={{
        percentVal,
        setPercentVal,
        result,
        setResult,
        disableReset,
        setDisableReset,
        resetValue,
        setResetValue,
        tipAmountPP,
        setTipAmountPP,
        customVal,
        setCustomVal,
      }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error(`useInputContext must be used within an InputProvider`);
  }
  return context;
};
