import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "../App";

const AuthLayout = () => {
  const [appData] = useContext(AppContext);
  const length = Object.entries(appData.answers).length;
  return length === 0 ? (
    <Navigate to="/questions" replace />
  ) : (
    <Outlet />
  );
};

export default AuthLayout;
