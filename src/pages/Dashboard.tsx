import { Outlet } from "react-router-dom";
import DashboardLayout from "src/components/organisms/DashboardLayout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default Dashboard;
