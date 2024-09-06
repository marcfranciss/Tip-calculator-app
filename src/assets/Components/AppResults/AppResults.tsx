import "./appResults.css";
import { Amounts } from "./Amounts/Amounts";
import { useInputContext } from "../../Context/InputContext";

export const AppResults = () => {
  const { disableReset, setResetValue, result, tipAmountPP } =
    useInputContext();
  return (
    <div className='app-results'>
      <div className='results'>
        <Amounts
          label='Tip Amount'
          value={tipAmountPP.toFixed(2).toLocaleString()}
        />
        <Amounts label='Total' value={result.toFixed(2).toLocaleString()} />
      </div>
      <button
        className='btn-reset'
        disabled={disableReset}
        onClick={() => setResetValue(true)}>
        RESET
      </button>
    </div>
  );
};
