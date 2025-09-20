import { useState } from "react";
import { Row, Col, Button, Checkbox, Input, Space } from "antd";
import { FunnelIcon } from "@phosphor-icons/react";
import styles from "./FilterForm.module.scss";

const FilterForm = () => {
  const [disabledReason, setDisabledReason] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Row gutter={[16, 16]} className={styles.wrapper}>
      <Col>
        <Button type="link" icon={<FunnelIcon />}>
          選択リスト
        </Button>
      </Col>

      <Space>
        <Col>
          <Checkbox
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
          >
            無効
          </Checkbox>
        </Col>

        <Col>
          <Input
            placeholder="無効理由"
            disabled={!isDisabled}
            value={disabledReason}
            onChange={(e) => setDisabledReason(e.target.value)}
            style={{ width: 200 }}
          />
        </Col>
      </Space>
    </Row>
  );
};

export default FilterForm;
