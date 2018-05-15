import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import { thArray, tdArray } from "variables/Variables.jsx";


class BlockList extends Component {

  previous() {
    alert("previous");
  }

  next() {
    alert("next");
  }

  more() {
    alert("more");
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={2} mdOffset={3}>
              <Button
                bsStyle="primary"
                block
                onClick={() => this.previous()}
              >
                &lt;&lt; 이전
              </Button>
            </Col>
            <Col md={2}>
              날짜?
            </Col>
            <Col md={2}>
              <Button
                bsStyle="primary"
                block
                onClick={() => this.next()}
              >
                &gt;&gt; 이후
              </Button>
            </Col>
          </Row>
          
          <Row style={{marginTop:"15px"}}>
            <Col md={12}>
              <Card
                title="최신 블록"
                category="설명란..."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={2} mdOffset={5}>
              <Button
                bsStyle="primary"
                block
                onClick={() => this.more()}
              >
                더 보기
              </Button>
            </Col>
          </Row>
          
          <Row>
            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BlockList;
