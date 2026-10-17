import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let ProductInfo = {title:"Product List"}
  let CategoryInfo = {title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info= {CategoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info= {ProductInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
