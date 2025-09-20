import {
  Form,
  Input,
  DatePicker,
  Radio,
  Select,
  Checkbox,
  Upload,
  Row,
  Col,
  Space,
} from "antd";
import NotationFace from "@/components/NotationFace";

const { Option } = Select;
import styles from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  return (
    <Form layout="vertical">
      <h2 className={styles.heading}>個人情報</h2>

      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Form.Item>
            <Upload maxCount={1} showUploadList={false}>
              <NotationFace />
            </Upload>
          </Form.Item>
        </Col>
        <Col xs={24} md={16}>
          <Form.Item label="氏名" required>
            <Row gutter={12}>
              <Col span={12}>
                <Input placeholder="カッカ" />
              </Col>
              <Col span={12}>
                <Input placeholder="トイチロウ" />
              </Col>
            </Row>

            <Row gutter={12} style={{ marginTop: "6px" }}>
              <Col span={12}>
                <Input placeholder="葛飾" />
              </Col>
              <Col span={12}>
                <Input placeholder="一郎" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="生年月日" required>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="性別">
        <Radio.Group defaultValue="male">
          <Radio value="male">男性</Radio>
          <Radio value="female">女性</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="世帯種類">
        <Select placeholder="選択してください">
          <Option value="other">その他家族と同居など</Option>
          <Option value="alone">一人暮らし</Option>
        </Select>
      </Form.Item>

      <Space>
        <span>居住状況</span>
        <Form.Item name="status" valuePropName="checked" noStyle>
          <Checkbox defaultChecked>独居高齢者</Checkbox>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default PersonalInfoForm;
