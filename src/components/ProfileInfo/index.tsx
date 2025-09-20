import { Card, Row, Col, Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <Card className={styles.wrapper}>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Form.Item label="氏名">
              <div className={styles.nameCard}>
                <div className={styles.cardItem}>
                  <span className={styles.cardTitle}>シミズ</span>
                  <span className={styles.cardDesc}>イチロー</span>
                </div>

                <div className={styles.cardItem}>
                  <span className={`${styles.cardTitle} ${styles.cardBold}`}>
                    清水
                  </span>
                  <span className={`${styles.cardDesc} ${styles.cardBold}`}>
                    一郎
                  </span>
                </div>
              </div>
            </Form.Item>
          </Col>

          <Col xs={12} md={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <Form.Item label="性別">
                  <Input value="女性" readOnly />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="歳">
                  <Input value="77" readOnly />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label="認定会期間">
                  <RangePicker
                    style={{ width: "100%" }}
                    value={[
                      dayjs("2021-06-01", "YYYY-MM-DD"),
                      dayjs("2025-12-31", "YYYY-MM-DD"),
                    ]}
                    format="YYYY年MM月DD日"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <Form.Item label="携帯">
                  <Input value="123456789" readOnly />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="介護度">
                  <Input value="要介護5" readOnly />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="申請区分">
                  <Input value="認定済（新規)" readOnly />
                </Form.Item>
              </Col>

              <Col xs={24} md={6}>
                <Form.Item label="担当">
                  <Input value="長野 美由紀" readOnly />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ProfileInfo;
