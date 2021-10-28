import React, { useContext } from 'react';
import { ModalContext } from '../../Providers/ModalProvider';
import styles from './Modal.module.scss';


const ModalHeader = () => {

    const [modal, setModal] = useContext(ModalContext);

    return (

      <div className={styles.modalHeader}>
          <div>
            <h2>Create Report</h2>
          </div>

          <div className={styles.close} onClick={() => setModal(false)}>
            <h2>X</h2>
          </div>
      </div>

    );

}

export default ModalHeader;

