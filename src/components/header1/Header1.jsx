import React, { Fragment } from "react";
import { Layout, Button, Row, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Header1 = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Button type="primary" block>
            Primary
          </Button>
        </Col>
        <Col span={8}>
          <Button type="primary" block>
            Primary
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header1;
