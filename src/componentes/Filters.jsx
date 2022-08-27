import React, { Component } from 'react';
import styles from './css/Filter.module.scss'
import Card from '../elements/Card.svg'

class Filters extends Component {
    render() {
        return (
            <section>
                <div className={styles.padre}></div>
                <div className={styles.azul1}></div>
                <h3 className={styles.title}>Filters</h3>
                <h4 className={styles.op1}>Since yesterday</h4>
                <h4 className={styles.op2}>Last 3 days</h4>
                <h4 className={styles.op3}>Last week</h4>
                <h4 className={styles.op4}>Last 15 days</h4>
                <h4 className={styles.op5}>Last month</h4>
                <div className={styles.sl1}></div>
                <div className={styles.sl2}></div>
                <img src={Card} className={styles.img2}></img>
                <h4 className={styles.subtitulo}></h4>
        
            </section>
        );
    }
}

export default Filters;
