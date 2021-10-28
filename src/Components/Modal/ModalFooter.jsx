import React, { useContext } from 'react';
import { ModalContext } from '../../Providers/ModalProvider';
import { ToastContext } from '../../Providers/ToastProvider';
import styles from './Modal.module.scss';


const ModalFooter = () => {

  const [modal, setModal] = useContext(ModalContext);
  const [toast, setToast] = useContext(ToastContext);

    return (

      <div className={styles.modalFooter}>
        <button className="mainButton" onClick={() => setToast(true)}>SAVE</button>
        <button className="outlineButton" onClick={() => setModal(false)}>CANCEL</button>
      </div>

    );

}

export default ModalFooter;

