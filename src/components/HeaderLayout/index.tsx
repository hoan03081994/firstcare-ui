import styles from "./Header.module.scss";
import { Button, Typography } from "antd";

const { Text } = Typography;

import { SignOutIcon, ArrowsClockwiseIcon } from "@phosphor-icons/react";
import Avatar from "@/assets/images/avatar.png";

const HeaderLayout = () => {
  return (
    <div className={styles.header}>
      <Text className={styles.headerLeft}>
        FirsCareV7_79997966 - 1400000143 ごもらの里居宅介護支援事業所
      </Text>

      <div className={styles.headerRight}>
        <img src={Avatar} alt="avatar" />

        <div className={styles.headerDescription}>
          <h2 className={styles.headerAdmin}>Admin......................</h2>
          <p className={styles.headerTitle}>FirstCareV7_79997966</p>
        </div>

        <div className={styles.headerIcon}>
          <SignOutIcon size={24} />
        </div>

        <Button icon={<ArrowsClockwiseIcon />} className={styles.btnRefresh}>
          提供
        </Button>
      </div>
    </div>
  );
};

export default HeaderLayout;
