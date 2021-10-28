import React from 'react';
import styles from './SidebarItem.module.scss';


const SidebarItem = ({icon, info}) => {


    return (


        <div class={styles.card}>

            <div class={styles.icon}>
                <img src={process.env.PUBLIC_URL + `/assets/${icon}.svg`} />
            </div>

            <div class={styles.info}>
                {info}
            </div>

        </div>


    );

}

export default SidebarItem;

