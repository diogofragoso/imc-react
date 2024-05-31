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

    greenFrom: 0,
    greenTo: 15,
    greenColor: "#00FF00",

    yellowFrom: 15.1,
    yellowTo: 18.4,
    yellowColor: "#FFFF00",

    orangeFrom: 18.5,
    orangeTo: 24.9,
    orangeColor: "#FFA500",

    redFrom: 25,
    redTo: 30,
    redColor: "#FF0000",

    purpleFrom: 30.1,  // Início da faixa roxa
    purpleTo: 50,      // Final da faixa roxa
    purpleColor: "#800080",    // Cor roxa para a faixa roxa
    
    


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
