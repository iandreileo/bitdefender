import React, { useContext } from 'react';
import { UserContext } from '../../Providers/UserProvider';
import styles from './Header.module.scss';


const Header = () => {

    const [user] = useContext(UserContext);

    return (

     <div className={styles.header}>

         <div className={styles.innerHeader}>

         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="43" viewBox="0 0 15 43" className={styles.arrow}>
            <g id="Group_11368" data-name="Group 11368" transform="translate(-4)">
                <path id="Path" d="M0,42a3.6,3.6,0,0,0,4.982,0L13.4,34.339A5.218,5.218,0,0,0,15,30.487V12.513a5.218,5.218,0,0,0-1.6-3.852L4.982,1A3.6,3.6,0,0,0,0,1Z" transform="translate(4)" fill="#181f2c"/>
                <path id="Path-2" data-name="Path" d="M4.3,5.5.22,9.685a.785.785,0,0,0,0,1.089.737.737,0,0,0,1.062,0l4.61-4.73a.784.784,0,0,0,0-1.089L1.282.226A.737.737,0,0,0,.22.226a.785.785,0,0,0,0,1.089Z" transform="translate(8 16)" fill="#fff"/>
            </g>
        </svg>

            <div>
                <select>
                    <option>Welcome, {user.name}</option>
                </select>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15.75" height="14" viewBox="0 0 15.75 14">
                    <path id="icon-whatsnew" d="M9.516,12.124V4.666H6.234v7.458c0,.365.3.542.656.542H8.859C9.218,12.666,9.516,12.488,9.516,12.124ZM4.84,3.332h2L5.547,1.655a.934.934,0,0,0-.708-.323,1,1,0,0,0,0,2Zm7.055-1a.993.993,0,0,0-.984-1,.934.934,0,0,0-.708.323L8.921,3.332H10.91A.993.993,0,0,0,11.895,2.332ZM15.75,5V8.332a.327.327,0,0,1-.328.333h-.984V13a.993.993,0,0,1-.984,1H2.3a.993.993,0,0,1-.984-1V8.666H.328A.327.327,0,0,1,0,8.332V5a.327.327,0,0,1,.328-.333H4.84a2.312,2.312,0,0,1-2.3-2.333A2.312,2.312,0,0,1,4.84,0,2.17,2.17,0,0,1,6.562.8L7.875,2.52,9.187.8A2.17,2.17,0,0,1,10.91,0a2.312,2.312,0,0,1,2.3,2.333,2.312,2.312,0,0,1-2.3,2.333h4.512A.327.327,0,0,1,15.75,5Z" transform="translate(0 0.001)" fill="rgba(0,0,0,0.7)"/>
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path id="Path_1335" data-name="Path 1335" d="M9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Zm.7,11.9H8.3V12.5H9.7Zm1.449-5.425-.63.644A2.383,2.383,0,0,0,9.7,11.1H8.3v-.35a2.818,2.818,0,0,1,.819-1.981l.868-.882A1.369,1.369,0,0,0,10.4,6.9a1.4,1.4,0,0,0-2.8,0H6.2a2.8,2.8,0,0,1,5.6,0A2.227,2.227,0,0,1,11.149,8.475Z" transform="translate(-2 -2)" fill="rgba(0,0,0,0.7)"/>
                </svg>
            </div>

            <div className="lastIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23">
                    <path id="notifications-24px" d="M9.744,16.5a1.44,1.44,0,0,0,1.436-1.436H8.308A1.435,1.435,0,0,0,9.744,16.5Zm4.308-4.308V8.6a4.374,4.374,0,0,0-3.231-4.537V3.577a1.077,1.077,0,1,0-2.154,0v.488A4.362,4.362,0,0,0,5.436,8.6v3.59L4,13.628v.718H15.487v-.718Z" transform="translate(-4 6.5)" fill="rgba(0,0,0,0.7)"/>
                    <circle id="Ellipse_204" data-name="Ellipse 204" cx="8" cy="8" r="8" transform="translate(6)" fill="#ff883f"/>
                    <text id="_24" data-name="24" transform="translate(9 11)" fill="#fff" font-size="9" font-family="Roboto-Regular, Roboto" letter-spacing="-0.04em"><tspan x="0" y="0">{user.notifications}</tspan></text>
                </svg>

            </div>
         </div>

     </div>

    );

}

export default Header;

