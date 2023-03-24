import IInput from "./IInput";
import * as S from "./style";

function Input(props: IInput) {
  return (
    <S.Input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      name={props.id}
    />
  );
}

export default Input;
