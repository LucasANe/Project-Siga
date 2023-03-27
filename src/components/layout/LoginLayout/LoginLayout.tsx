import { ILoginLayout } from "./ILoginLayout";
import * as S from "./style";
import * as Atoms from "src/components/atoms";
import * as Molecules from "src/components/molecules";

function LoginLayout(props: ILoginLayout) {
  return (
    <S.Container>
      <S.LoginBox>
        <div className="logo">
          <Atoms.Logo width={400} height={139} />
        </div>
        <Molecules.InputField
          label="Email:"
          id="email"
          type="email"
          placeholder="E-mail"
        />
        <Molecules.InputField
          label="Senha:"
          id="password"
          type="password"
          placeholder="Senha"
        />
        <div className="button-box">
          <Atoms.BtnConfirm text="Confirmar" />
          <div>Problemas com o acesso?</div>
        </div>
      </S.LoginBox>
    </S.Container>
  );
}

export default LoginLayout;
