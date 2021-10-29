import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import FirstPage from '../FirstPage/FirstPage';
import Modal from '../Modal/Modal';

const Landing = () => {

    return (

      <>
        <Breadcrumbs title="Page Title"/>
        <FirstPage />
        <Modal title="Create Report"/>
      </>

    );

}

export default Landing;

