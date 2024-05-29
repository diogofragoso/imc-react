import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


function RouterApp(){


    return (

        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}></Route>




            </Routes>
        
        </BrowserRouter>
    );


}


export default RouterApp;