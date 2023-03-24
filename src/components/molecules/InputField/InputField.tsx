import * as S from "./style";
import * as Atoms from "src/components/atoms";
import IInputField from "./IInputField";

function InputField(props: IInputField) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={props.id}>{props.label}</S.Label>
      <Atoms.Input {...props} />
      {props.id === "password" && (
        <S.ForgetPassword>Esqueceu sua senha?</S.ForgetPassword>
      )}
    </S.InputContainer>
  );
}

export default InputField;
