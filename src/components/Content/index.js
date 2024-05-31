
import { useState } from "react";
import styles from "./Content.module.css";
import { Row, Col, Card, CardTitle, CardText, Button, Form, Label, Input, FormText, FormGroup, FormFeedback } from "reactstrap";
import Grafico from "../Grafico";
function Content() {


    const [resultado, setResultado] = useState(0);
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [botao, setBotao] = useState(false);
   

   


    function Resultado() {

        if(peso && altura ){
        let novoResultado = peso / (altura * altura);
        setResultado(novoResultado.toFixed(2));
        }

    }



    




    return (

        <div className="container-fluid">
            <div className={styles.content}>

                <Row>
                    <Col xl="6">
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
                            onClick={ Resultado }                           
                            
                            >                               
                            
                                Calcular
                            </Button>

                        </Card>
                    </Col>

                   

                    <Col xl="6" className={styles.grafico}>

                        {/* {resultado > 0 && <Grafico imc={parseFloat(resultado)} /> }  Renderiza o gráfico apenas se o resultado for maior que 0 */}
                        <Grafico imc={parseFloat(resultado)} />
                        {/* <Grafico imc={resultado} />  aqui vai dar erro por causa do parseFloat*/} 
                       
                        
                        
                    </Col>
                    
                </Row>





            </div>
         

        </div>


    );


}


export default Content;