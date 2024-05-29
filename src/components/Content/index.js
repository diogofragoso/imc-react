
import { useState } from "react";
import styles from "./Content.module.css";
import { Row, Col, Card, CardTitle, CardText, Button, Form, Label, Input, FormText, FormGroup, FormFeedback } from "reactstrap";
function Content() {



    function CalcularImc() {

        alert("E ai broa de milho")


    }

    const [resultado, setResultado] = useState();



    return (

        <div className="container-fluid">
            <div className={styles.content}>

                <Row>
                    <Col sm="6">
                        <Card body>

                            <CardText>
                                <Form>

                                    <FormGroup>
                                        <Label for="example">
                                            Peso
                                        </Label>
                                        <Input valid placeholder="Digite o peso" />


                                        <Label for="example">
                                            Altura
                                        </Label>
                                        <Input valid placeholder="Digite a altura" />


                                    </FormGroup>

                                </Form>
                            </CardText>
                                    <Button
                                        type="button"
                                        onClick={CalcularImc}
                                    >
                                        Calcular
                                    </Button>



                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Go somewhere
                            </Button>
                        </Card>
                    </Col>
                </Row>














            </div>



        </div>


    );


}


export default Content;