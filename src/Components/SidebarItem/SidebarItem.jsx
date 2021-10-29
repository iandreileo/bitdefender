import React from 'react';
import styles from './SidebarItem.module.scss';


const SidebarItem = ({icon, info, onClick}) => {

    

    return (


        <div class={styles.card} onClick={onClick}>

            <div class={styles.icon}>
                <img alt="sidebarItem" src={process.env.PUBLIC_URL + `/assets/${icon}.svg`} />
            </div>

            <div class={styles.info}>
                {info}
            </div>

        </div>


    );

}

export default SidebarItem;

