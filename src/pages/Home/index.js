import Content from "../../components/Content";
import Header from "../../components/Header";
import { ThemeProvider } from "../../components/ThemeContext";
import React from 'react';
import styles from "./Home.module.css";


function Home(){

    return (
        <div>
            <Header />
            <ThemeProvider>
                     <Content />

            </ThemeProvider>
        </div>
        


    );



}


export default Home;




// ReactDOM.render(
//   <ThemeProvider>
//       <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );
