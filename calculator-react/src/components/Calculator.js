import React from 'react'
import style from '../css/Calculator.module.css'
import Display from "../components/Display"


function Calculator() {
    return (
        <div className={style.calculator}>
            <Display />
            <h1>This is the calculator component</h1>
        </div>
    )
}

export default Calculator;
