import React, { useContext } from 'react';
import { ModalContext } from '../../Providers/ModalProvider';
import styles from './FirstPage.module.scss';


const FirstPage = () => {


    const [modal, setModal] = useContext(ModalContext);

    return (


        <div className={styles.container}>

            <div>
                <img alt="rocket" src={process.env.PUBLIC_URL + `/assets/rocket.svg`} />
            </div>

            <div>
                <h2>Start creating reports</h2>
                <p>You don’t have any reports defined yet</p>
                <button className="mainButton" onClick={() => setModal(true)}>CREATE REPORT</button>
            </div>


        </div>



    );

}

export default FirstPage;

