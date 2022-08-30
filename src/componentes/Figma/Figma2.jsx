import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2';
import styles from './Figma2.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Col, Container, Row } from 'react-bootstrap';


const Figma2 = () => {
    return (
        <Container className={`${styles.backgr} `}>
            <Row>
                <Col lg={3} className={styles.column}>
                    <Component1 />
                </Col>
                <Col lg={8}>
                    <Component2/>
                </Col>
            </Row>
        </Container>
    );
};


export default Figma2;

