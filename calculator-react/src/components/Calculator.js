import React from 'react'
import style from '../css/Calculator.module.css'
import Display from "../components/Display"
import ButtonsContainer from "../components/ButtonsContainer"


function Calculator() {
    return (
        <div className={style.calculator}>
            <Display />
            <ButtonsContainer />
        </div>
    )
}

export default Calculator;
