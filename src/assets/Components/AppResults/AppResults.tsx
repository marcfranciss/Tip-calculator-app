import "./appResults.css";
import { Amounts } from "./Amounts/Amounts";
import { useInputContext } from "../../Context/InputContext";

export const AppResults = () => {
  const { enableReset, setResetValue, result } = useInputContext();
  return (
    <div className='app-results'>
      <div className='results'>
        <Amounts label='Tip Amount' value={"0.00"} />
        <Amounts label='Total' value={result.toFixed(2).toLocaleString()} />
      </div>
      <button
        className='btn-reset'
        disabled={enableReset}
        onClick={() => setResetValue(true)}>
        RESET
      </button>
    </div>
  );
};
