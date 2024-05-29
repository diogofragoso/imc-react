
import styles from "./Content.module.css";
import {Row, Col, Card, CardTitle, CardText, Button} from "reactstrap";
function Content() {


    return (
        
        <div className="container-fluid">
                <div className={styles.content}>

            <Row>
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