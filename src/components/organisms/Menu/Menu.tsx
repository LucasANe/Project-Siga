import IMenuLayout from "./IMenu";
import * as Molecules from "src/components/molecules";
import * as S from "./style";

function MenuLayout(props: IMenuLayout) {
  return (
    <S.Container>
      <div className="sidebar">
        <Molecules.Sidebar />
      </div>
    </S.Container>
  );
}

export default MenuLayout;
