import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

import Logo from "@/assets/images/Logo.png";
import { Menu } from "antd";
import {
  BellIcon,
  CalendarBlankIcon,
  ChartPieSliceIcon,
  CheckSquareOffsetIcon,
  GearIcon,
  HandCoinsIcon,
  IdentificationBadgeIcon,
  LifebuoyIcon,
  PlantIcon,
  StarIcon,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { ArrowIconLeft, ArrowIconRight } from "@/assets/icons";
import { useState } from "react";

import Divider from "@/components/Divider";
import DividerInner from "@/components/DividerInner";

const items = [
  {
    key: "1",
    icon: (
      <div className={styles.menuIcon}>
        <BellIcon size={24} />
      </div>
    ),
    label: "お知らせ",
  },
  {
    key: "2",
    icon: (
      <div className={styles.menuIcon}>
        <IdentificationBadgeIcon size={24} />
      </div>
    ),
    label: "利用者情報",
  },
  {
    key: "3",
    icon: (
      <div className={styles.menuIcon}>
        <StarIcon size={24} />
      </div>
    ),
    label: "アセスメント",
  },
  {
    key: "4",
    icon: (
      <div className={styles.menuIcon}>
        <PlantIcon size={24} />
      </div>
    ),
    label: <span>サービス計画</span>,
  },
  {
    key: "5",
    icon: (
      <div className={styles.menuIcon}>
        <CalendarBlankIcon size={24} />
      </div>
    ),
    label: <span>予定管理</span>,
  },
  {
    key: "6",
    icon: (
      <div className={styles.menuIcon}>
        <CheckSquareOffsetIcon size={24} />
      </div>
    ),
    label: <span>日常業務</span>,
  },
  {
    key: "7",
    icon: (
      <div className={styles.menuIcon}>
        <ChartPieSliceIcon size={24} />
      </div>
    ),
    label: <span>実績管理</span>,
  },
  {
    key: "8",
    icon: (
      <div className={styles.menuIcon}>
        <HandCoinsIcon size={24} />
      </div>
    ),
    label: <span>請求管理</span>,
  },
  {
    key: "9",
    icon: (
      <div className={styles.menuIcon}>
        <UserPlusIcon size={24} />
      </div>
    ),
    label: <span>各種登録情報</span>,
  },
  {
    key: "10",
    icon: (
      <div className={styles.menuIcon}>
        <GearIcon size={24} />
      </div>
    ),
    label: <span>維持管理</span>,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className={`${styles.container} ${
        collapsed ? styles.wrapperCollapsed : styles.wrapper
      }`}
    >
      <div className={styles.toggleBtn} onClick={toggleCollapsed}>
        {true ? <ArrowIconLeft /> : <ArrowIconRight />}
      </div>

      <Link to="/" className={styles.logoLink}>
        <img src={Logo} alt="logo" />

        {!collapsed && <p className={styles.logoText}>ファーストケア</p>}
      </Link>

      {collapsed ? <DividerInner /> : <Divider />}

      <h2 className={styles.heading}>メニュー</h2>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="light"
        items={items}
        inlineCollapsed={collapsed}
      />

      {collapsed ? <DividerInner /> : <Divider />}
      <h2 className={styles.heading}>ツール</h2>
      <Menu
        defaultOpenKeys={["11"]}
        mode="inline"
        theme="light"
        items={[
          {
            key: "11",
            icon: (
              <div className={styles.menuIcon}>
                <LifebuoyIcon size={24} />
              </div>
            ),
            label: "サポート",
          },
        ]}
        inlineCollapsed={false}
      />
    </div>
  );
};

export default Sidebar;
