import "./amounts.css";

interface AmountsProps {
  label: string;
  value: string;
}
export const Amounts = ({ label, value }: AmountsProps) => {
  return (
    <div className='amounts-container'>
      <div className='amounts-labels'>
        <span className='amounts-text'>{label}</span>
        <span className='amounts-misc'>/ person</span>
      </div>
      <div className='amount'>
        <span className='calc-amount'>${value}</span>
      </div>
    </div>
  );
};
