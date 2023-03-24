import IDashboardLayout from "./IDashboardLayout";
import * as Molecules from "src/components/molecules";
import * as S from "./style";

function DashboardLayout(props: IDashboardLayout) {
  return (
    <S.Container>
      <>
        <div className="sidebar">
          <Molecules.Sidebar />
        </div>
        {props.children}
      </>
    </S.Container>
  );
}

export default DashboardLayout;
