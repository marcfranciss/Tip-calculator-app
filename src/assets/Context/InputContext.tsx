import { createContext, ReactNode, useContext, useState } from "react";

interface InputContextType {
  enableReset: boolean;
  setEnableReset: (value: boolean) => void;
  resetValue: boolean;
  setResetValue: (value: boolean) => void;
  result: number;
  setResult: (value: number) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

interface InputProviderProps {
  children: ReactNode;
}
export const InputProvider = ({ children }: InputProviderProps) => {
  const [enableReset, setEnableReset] = useState<boolean>(true);
  const [resetValue, setResetValue] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);

  return (
    <InputContext.Provider
      value={{
        result,
        setResult,
        enableReset,
        setEnableReset,
        resetValue,
        setResetValue,
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
