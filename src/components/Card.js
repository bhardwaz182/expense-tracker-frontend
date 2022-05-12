import React from "react";
import {Card,Container,Row,Col, Button, Accordion} from "react-bootstrap";

const DataCard = ({_id,what,who,when,cost,included, onEdit}) =>{
    return(
        <Card className="card">
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Text>what</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>{what}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>who</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>{who}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>cost</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>{cost}</Card.Text>
                        </Col>
                    </Row>
                    <Accordion className="accordian">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Who are Included
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    {
                                        included.map(item=>(item.value?<Row>
                                            <Col>{item.name}</Col>
                                            <Col>{item.cost}</Col>
                                        </Row>:''))
                                    }
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={()=>onEdit(_id)}>Edit</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default DataCard;