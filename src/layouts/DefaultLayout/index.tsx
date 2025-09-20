import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import HeaderLayout from "@/components/HeaderLayout";

const DefaultLayout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <HeaderLayout />

        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
