import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from './GenderSerlector.module.css';

const Genero = () => {
    const { switchTheme } = useContext(ThemeContext);
  const handleGenderSelect = (event) => {
        switchTheme(event.target.value);
    };

    return (
        <div className={styles.genero}>
            <label>
                <input
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={handleGenderSelect}
                />
                Masculino
            </label>
            <label>
                <input
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={handleGenderSelect}
                />
                Feminino
            </label>
        </div>
    );
};

export default Genero;
