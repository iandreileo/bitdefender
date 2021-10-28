import React, { useContext } from 'react';
import { ModalContext } from '../../Providers/ModalProvider';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import styles from './Modal.module.scss';


const Modal = () => {

    const [modal, setModal] = useContext(ModalContext);

    return (

      <>
        {
            modal ? 
            
            <div className={styles.modal}>
                <ModalHeader />
                <ModalContent />
                <ModalFooter />
            </div>
            
            : ''
        }
      </>

    );

}

export default Modal;

