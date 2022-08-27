import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2';
import styles from './Figma2.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css' ;


const Figma2 = () => {
    return (
        <div className={`${styles.backgr} row`}>
            <Component1/>
            <Component2/>
            
        </div>
    );
};


export default Figma2;

