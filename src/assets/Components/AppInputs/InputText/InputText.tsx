import "./inputText.css";
interface InputTextProps {
  text: string;
}

export const InputText = ({ text }: InputTextProps) => {
  return <h2 className='input-text'>{text}</h2>;
};
