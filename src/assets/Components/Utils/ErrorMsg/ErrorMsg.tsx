import "./errorMsg.css";
interface ErrorMsgProps {
  text: string;
}
export const ErrorMsg = ({ text }: ErrorMsgProps) => {
  return <div className='error-msg'>{text}</div>;
};
