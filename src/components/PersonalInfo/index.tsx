import { Card, Col, Form, Row } from "antd";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import AddressForm from "@/components/AddressForm";
import ServiceManagementForm from "@/components/ServiceManagerForm";

const PersonalInfo = () => {
  return (
    <Card>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={8}>
            <PersonalInfoForm />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <AddressForm />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <ServiceManagementForm />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default PersonalInfo;
