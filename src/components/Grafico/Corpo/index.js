import styles from './Corpo.module.css'




function Corpo({imagem}){

    return (

        <div className={styles.corpo}>
            
           
            {/* <img src="../public/imagens/magro.png" /> */}
            <img src={`${process.env.PUBLIC_URL}/imagens/${imagem}`} alt="descrição da imagem" />

        </div>
    );


}


export default Corpo;