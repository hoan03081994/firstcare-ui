import { HashRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import paths from "@/configs/paths";

// pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

const AppRouters = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.dashboard} element={<Dashboard />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={paths.login} element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouters;
