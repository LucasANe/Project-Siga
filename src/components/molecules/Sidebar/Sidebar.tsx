import { Logo } from "src/components/atoms";
import ISidebar from "./ISidebar";
import * as S from "./style";
import * as imgs from "src/assets/images";
import { Link } from "react-router-dom";

function Sidebar(props: ISidebar) {
  const vwToPx = (): number => {
    const width = window.innerWidth;
    return (14 * width) / 100;
  };
  const links = [
    "matricula",
    "consulta",
    "plano-de-estudo",
    "matrizes",
    "biblioteca",
    "solicitacoes",
    "conta",
    "logout",
  ];
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Logo width={vwToPx()} height={55} white={true} />
        </S.Header>
        <S.MenuList>
          <Link to={links[0]}>
            <li>
              <img src={imgs.registration} alt="Matrícula" />
              <span>Matrícula</span>
            </li>
          </Link>
          <Link to={links[1]}>
            <li>
              <img src={imgs.consult} alt="Consultas" />
              <span>Consultas</span>
            </li>
          </Link>
          <Link to={links[2]}>
            <li>
              <img src={imgs.teachingPlan} alt="Planos de Ensino" />
              <span>Planos de Ensino</span>
            </li>
          </Link>
          <Link to={links[3]}>
            <li>
              <img src={imgs.matrices} alt="Matrizes em Inglês" />
              <span>Matrizes em Inglês</span>
            </li>
          </Link>
          <Link to={links[4]}>
            <li>
              <img src={imgs.lib} alt="Biblioteca" />
              <span>Biblioteca</span>
            </li>
          </Link>
          <Link to={links[5]}>
            <li>
              <img src={imgs.request} alt="Solicitações" />
              <span>Solicitações</span>
            </li>
          </Link>
        </S.MenuList>
      </S.Content>
      <S.Divider />
      <S.Content>
        <S.MenuList>
          <Link to={links[6]}>
            <li>
              <img src={imgs.account} alt="Conta" />
              <span>Conta</span>
            </li>
          </Link>
          <Link to={links[7]}>
            <li>
              <img src={imgs.exit} alt="Sair" />
              <span>Sair</span>
            </li>
          </Link>
        </S.MenuList>
      </S.Content>
    </S.Container>
  );
}

export default Sidebar;
