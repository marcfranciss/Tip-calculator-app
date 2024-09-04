import "./appResults.css";
import { Amounts } from "./Amounts/Amounts";

interface AppResultsProps {
  result: string;
}
export const AppResults = ({ result }: AppResultsProps) => {
  return (
    <div className='app-results'>
      <div className='results'>
        <Amounts label='Tip Amount' value={"0.00"} />
        <Amounts label='Total' value={result} />
      </div>
      <button className='btn-reset' disabled>
        RESET
      </button>
    </div>
  );
};
