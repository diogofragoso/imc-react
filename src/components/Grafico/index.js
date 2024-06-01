import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styles from './Grafico.module.css';

// function getRandomNumber() {
//   return Math.random() * 100;
// }

export function getData(imc) {
    return [
        ["Label", "Value"],
        ["IMC", imc],
        // ["CPU", imc],
        // ["Network", getRandomNumber()],
        // alert(imc)
    ];
}

export const options = {
    width: 700,
    height: 250,

    greenFrom: 18.6,
    greenTo: 24.9,
    greenColor: "#90EE90",

    yellowFrom: 0,
    yellowTo: 18.5,
    yellowColor: "#FFD700",
  
    redFrom: 25,
    redTo: 50,
    redColor: "#FF7F7F",    
    


    minorTicks: 10,
    max: 50,      // Definindo o máximo da escala como 50
    
};

function Grafico({imc}) {
    const [data, setData] = useState(getData(imc));    

 


    useEffect(() => {
        // Atualiza os dados quando a prop imc mudar
        setData(getData(imc));

        const id = setInterval(() => {
            setData(getData(imc));
        }, 3000);





        return () => {
            clearInterval(id);
        };
    }, [imc]);

    return (

        <Chart
            className={styles.grafico}
            chartType="Gauge"
            width="100%"
            height="200px"
            data={data}
            options={options}
          
          
        />
    );
}

export default Grafico;
