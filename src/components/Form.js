import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";

const Form = ({
  includedData,
  formChange,
  onSubmit,
  afterEdit = "",
  stopEdit = () => {},
  onDelete = (id) => {},
}) => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <label htmlFor="what">What</label>
        </Col>
        <Col sm={12} md={6}>
          <input
            type="text"
            id="what"
            placeholder="what"
            value={includedData.what}
            onChange={(event) => formChange(event, "what")}
            className="form-elements"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label htmlFor="who">Who</label>
        </Col>
        <Col sm={12} md={6}>
          {/* <input type="text" id="who" placeholder="who" onChange={(event)=>formChange(event,"who")}/> */}
          <select
            id="who"
            onChange={(eve) => formChange(eve, "who")}
            value={includedData.who}
            className="form-elements"
          >
            {includedData.included.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label htmlFor="cost">Cost</label>
        </Col>
        <Col sm={12} md={6}>
          <input
            type="number"
            id="cost"
            placeholder="cost"
            value={includedData.cost}
            onChange={(event) => formChange(event, "cost")}
            className="form-elements"
          />
        </Col>
      </Row>
      <Accordion className="accordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Who are included</Accordion.Header>
          <Accordion.Body>
            {includedData.included.map((item, index) => (
              <Row key={index}>
                <Col>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(event) => formChange(event, index)}
                      checked={item.value}
                      name={item.name}
                      className=""
                    />
                    {item.name}
                  </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    onChange={(event) => formChange(event, index)}
                    value={item.cost}
                    className="distribution-elements"
                  />
                </Col>
              </Row>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {!afterEdit ? (
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button
                variant="primary"
                onClick={() => afterEdit(includedData._id)}
                className="card-form-button"
              >
                Modify
              </Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button variant="secondary" onClick={stopEdit} className="card-form-button">
                Cancel
              </Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button
                variant="danger"
                onClick={() => onDelete(includedData._id)}
                className="card-form-button"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Form;
