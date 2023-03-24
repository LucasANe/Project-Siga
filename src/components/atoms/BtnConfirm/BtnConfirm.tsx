import IBtnConfirm from "./IBtnConfirm";
import * as S from "./style";

function BtnConfirm(props: IBtnConfirm) {
  return <S.Button>{props.text}</S.Button>;
}

export default BtnConfirm;
