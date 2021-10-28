import React from 'react';
import styles from './Breadcrumbs.module.scss'


const Breadcrumbs = ({title}) => {

    return (

      <div className={styles.breadcrumbs}>
        <h2>{title}</h2>
      </div>

    );

}

export default Breadcrumbs;

