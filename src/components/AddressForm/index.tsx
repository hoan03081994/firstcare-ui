import { Form, Input, Select, Checkbox, Row, Col } from "antd";

const { Option } = Select;
import styles from "./AddressForm.module.scss";

const AddressForm = () => {
  return (
    <Form
      layout="vertical"
      initialValues={{ status: ["local", "independent", "senior"] }}
    >
      <h2 className={styles.heading}>個人情報</h2>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item label="郵便番号">
            <Input placeholder="2150023" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="都道府県">
            <Select placeholder="選択してください">
              <Option value="kanagawa">神奈川県</Option>
              <Option value="tokyo">東京都</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="市区町村">
        <Select placeholder="選択してください">
          <Option value="kawasaki">川崎市麻生区</Option>
          <Option value="yokohama">横浜市</Option>
        </Select>
      </Form.Item>

      <Form.Item label="住所詳細">
        <Input placeholder="方平55-55-55" />
      </Form.Item>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item label="TEL">
            <Input placeholder="0335036876" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="携帯TEL">
            <Input placeholder="0335036876" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="E-Mail">
        <Input placeholder="ngochai@bee-system.vn" />
      </Form.Item>

      <Form.Item label="FAX">
        <Input placeholder="123456" />
      </Form.Item>

      <Form.Item label="" name="status">
        <Checkbox.Group>
          <Row gutter={[16, 8]}>
            <Col span={24}>
              <Checkbox value="local">中山間地域に居住</Checkbox>
            </Col>

            <Col span={8}>
              <Checkbox value="independent">自立</Checkbox>
            </Col>
            <Col span={16}>
              <Checkbox value="senior">入居の利用者（高齢者住宅版）</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
