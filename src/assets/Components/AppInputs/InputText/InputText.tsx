import "./inputText.css";
interface InputTextProps {
  text: string;
}

export const InputText = ({ text }: InputTextProps) => {
  return <span className='input-text'>{text}</span>;
};
