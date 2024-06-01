
import { useState, useEffect } from "react";
import styles from "./Content.module.css";
import { Row, Col, Card, CardTitle, CardText, Button, Form, Label, Input, FormText, FormGroup, FormFeedback } from "reactstrap";
import Grafico from "../Grafico";
function Content() {


    const [resultado, setResultado] = useState(0);
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [exibirImc, setExibirImc ] = useState('');
    const [botao, setBotao] = useState(false);
   

    useEffect(() => {
        if (peso && altura) {
            let novoResultado = peso / (altura * altura);
            setResultado(novoResultado.toFixed(2));
            TabelaImc(novoResultado);
        }
    }, [peso, altura]);

   


    function Resultado() {
       
        if(peso && altura ){
        let novoResultado = peso / (altura * altura);
        setResultado(novoResultado.toFixed(2));
        TabelaImc(novoResultado);
        }

    }



  

 


    function TabelaImc(imc){

            
        let result = " ";
        
        if (imc < 16) {
            result = "Magreza grave";
        } else if (imc < 17) {
            result = "Magreza moderada";
        } else if (imc < 18.5) {
            result = "Magreza leve";
        } else if (imc < 25) {
            result = "Peso ideal";
        } else if (imc < 30) {
            result = "Sobrepeso";
        } else if (imc < 35) {
            result = "Obesidade grau 1";
        } else if (imc < 40) {
            result = "Obesidade grau 2";
        } else {
            result = "Obesidade grau 3";
        }
        
        setExibirImc(result);


    }

    {/*

resultados menores que 16 — magreza grave;
resultados entre 16 e 16,9 — magreza moderada;
resultados entre 17 e 18,5 — magreza leve;
resultados entre 18,6 e 24,9 — peso ideal;
resultados entre 25 e 29,9 — sobrepeso;
resultados entre 30 e 34,9 — obesidade grau I;
resultados entre 35 e 39,9 — obesidade grau II ou severa;
resultados maiores do que 40 — obesidade grau III ou mórbida.


*/}



    




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
                <Row className={styles.texto}>
                    <Col xl="12">
                        <div>
                            <h2 id="exibirImc">{exibirImc}</h2>
                        </div>
                    </Col>
                </Row>
        </div>
         



    );


}


export default Content;








