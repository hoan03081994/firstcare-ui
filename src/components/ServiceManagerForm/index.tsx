import { Form, Input, DatePicker, Select, InputNumber } from "antd";
import StatusIcon from "@/components/StatusIcon";

const { Option } = Select;

import styles from "./ServiceManagerForm.module.scss";

const ServiceManagementForm = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <Form
      form={form}
      name="service-management"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        reason: "理由...",
        notes: "Text...",
      }}
    >
      <Form.Item
        label="担当者"
        name="responsiblePerson"
        rules={[{ required: true, message: "Vui lòng chọn người phụ trách!" }]}
      >
        <Select placeholder="担当者を選択してください">
          <Option value="hayashi">林 八木</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="開始日付"
        name="startDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu!" }]}
      >
        <DatePicker
          format="YYYY年MM月DD日"
          style={{ width: "100%" }}
          placeholder="開始日"
        />
      </Form.Item>

      <Form.Item
        label="中止日付"
        name="endDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc!" }]}
      >
        <DatePicker
          format="YYYY年MM月DD日"
          style={{ width: "100%" }}
          placeholder="終了日"
        />
      </Form.Item>

      <Form.Item
        label="理由"
        name="responsiblePerson"
        rules={[{ required: true, message: "Vui lòng chọn người phụ trách!" }]}
      >
        <Select placeholder="担当者を選択してください">
          <Option value="hayashi">林 八木</Option>
        </Select>
      </Form.Item>

      <Form.Item label="備考" name="notes">
        <Input.TextArea placeholder="テキスト" />
      </Form.Item>

      <Form.Item
        label="平成30年2月末までの短期入所利用累計日数（日）"
        name="shortTermUsageDays"
      >
        <InputNumber min={0} max={365} defaultValue={3} />
      </Form.Item>

      <StatusIcon />
      <span className={styles.statusLabel}>
        被保険者証の更新時には「0日」に戻してください。
      </span>
    </Form>
  );
};

export default ServiceManagementForm;
