import React, { Fragment } from "react";
import { Layout, Button, Row, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Header2 = () => {
  return (
    <div>
      <Row>
      <Col  span={4}>
        <Button type="primary" block>
          Primary
        </Button>
      </Col>
      <Col  span={4}>
        <Button type="primary" block>
          Primary
        </Button>
      </Col>
      
      <Col  span={4}>
        <Button type="primary" block>
          Primary
        </Button>
      </Col>
      <Col  span={4}>
        <Button type="primary" block>
          Primary
        </Button>
      </Col>
      <Col  span={4}>
        <Button type="primary" block>
          Primary
        </Button>
      </Col>

    </Row>
    </div>
    
  );
};

export default Header2;
