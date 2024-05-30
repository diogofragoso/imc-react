
import { useState } from "react";
import styles from "./Content.module.css";
import { Row, Col, Card, CardTitle, CardText, Button, Form, Label, Input, FormText, FormGroup, FormFeedback } from "reactstrap";
function Content() {





    const [resultado, setResultado] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [botao, setBotao] = useState();
    const [exibirResultado, setExibirResultado] = useState('Resultado');




    function Resultado() {

        let novoResultado = peso / (altura * altura);
        setResultado(novoResultado.toFixed(2));


        // alert(resultado);

    }



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
                                        <Input
                                            type="number"
                                            id="pesoInput"
                                            valid placeholder="Digite o peso"
                                            onChange={e => setPeso(parseFloat(e.target.value))}
                                            value={peso}

                                        />

                                        <Label for="example">
                                            Altura
                                        </Label>
                                        <Input
                                            id="alturaInput"
                                            type="number"
                                            valid placeholder="Digite a altura"
                                            onChange={e => setAltura(parseFloat(e.target.value))}
                                            value={altura}
                                        />


                                    </FormGroup>

                                </Form>
                            </CardText>
                            <Button
                                type="button"
                                onClick={Resultado}
                            >
                                Calcular
                            </Button>



                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body className={styles.card}>
                            <CardTitle tag="h5">
                                {resultado !== null ? (
                                    <h2 id="exibirResultado">
                                        Resultado: {resultado}
                                    </h2>
                                ) : (
                                    <h2 id="exibirResultado">
                                        Nenhum resultado
                                    </h2>
                                )}

                            </CardTitle>



                        </Card>
                    </Col>
                </Row>














            </div>



        </div>


    );


}


export default Content;