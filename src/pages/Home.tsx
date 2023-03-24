import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div style={{ position: "absolute", right: "0" }}>
        Home
        <Link to={"/login"}>Ir para Login</Link>
        <Link to={"/dashboard"}>Ir para Dasboard</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
