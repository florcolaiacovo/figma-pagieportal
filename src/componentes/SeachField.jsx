import React, { Component } from 'react';
import styles from './css/SeachFields.module.scss'

class SeachField extends Component {
    render() {
        return (
        <section>
            <div className={styles.padre}></div>
            <div className={styles.card}></div>
            <h5 className={styles.seach}>Enter jobs, skills, etc.</h5>
            <svg className={styles.icon}
                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7429 20.4478L16.2759 14.9808C19.4829 11.0585 18.9031 5.27904 14.9808 2.07205C11.0585 -1.13494 5.27908 -0.555194 2.07205 3.3671C-1.13498 7.2894 -0.55515 13.0689 3.36714 16.2759C6.74559 19.0383 11.6024 19.0383 14.9808 16.2759L20.4478 21.7429C20.8117 22.0943 21.3915 22.0842 21.7429 21.7204C22.0857 21.3654 22.0857 20.8027 21.7429 20.4478ZM1.86138 9.18861C1.86138 5.14189 5.14188 1.86138 9.18861 1.86138C13.2353 1.86138 16.5158 5.14189 16.5158 9.18861C16.5158 13.2353 13.2353 16.5158 9.18861 16.5158C5.14378 16.5113 1.86593 13.2334 1.86138 9.18861Z" fill="#B3B1B4"/>
                </svg>

        </section>
        );
    }
}

export default SeachField;
