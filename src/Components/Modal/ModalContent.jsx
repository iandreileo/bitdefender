import React, { useState } from 'react';
import styles from './Modal.module.scss';


const ModalContent = () => {

  const [exportType, setExportType] = useState('now');

    return (

      <div className={styles.modalContent}>
        <div className={styles.modalInner}>
          <div>
            <h3>Details</h3>
            <div className={styles.row}>
              <div className={styles.col}>
                <label>Type</label>
              </div>
              <div className={styles.col}>
                <select>
                  <option>Executive Summary</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <label>Company</label>
              </div>
              <div className={styles.col}>
                <select>
                  <option>Company Name</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <label>Name<span>*</span></label>
              </div>
              <div className={styles.col}>
                <input type="text" placeholder="Placeholder"></input>
              </div>
            </div>

          </div>

          <div>
            <h3>Settings</h3>
            <input type="radio" name="settings" id="now" value="now" checked={exportType == 'now'} onChange={(e) => {setExportType(e.target.value);console.log(e.target.value)}}/> <label>Export now</label> <br/>

            <input type="radio" name="settings" id="scheduled" value="scheduled" checked={exportType == 'scheduled'} onChange={(e) => {setExportType(e.target.value);console.log(e.target.value)}}/> <label>Scheduled</label>

            {
                exportType == 'scheduled' ? 
                <>
                <div className={styles.row}>
                <div className={styles.col}>
                  <label style={{paddingLeft: "25px"}}>Reccurence</label>
                </div>
                <div className={styles.col}>
                  <select>
                    <option>Weekly</option>
                  </select>
                </div>
              </div>
  
              <div className={styles.row}>
                <div className={styles.col}>
                  <label style={{paddingLeft: "25px"}}>On</label>
                </div>
                <div className={styles.col}>
                  <select>
                    <option>Monday</option>
                  </select>
                </div>
              </div></> : ''
            }

            <div className={styles.row}>
              <div className={styles.col}>
                <label>Reporting interval<span></span></label>
              </div>
              <div className={styles.col}>
              <select>
                  <option>Last 7 days</option>
                </select>
              </div>
            </div>


            <div className={styles.row}>
              <div className={styles.col}>
                <label>Attach Files</label>
              </div>
              <div className={styles.col}>
                <input type="checkbox" name="attached" disabled/> <label>Dashboard PDF</label><br/>
                <input type="checkbox" name="attached"/> <label>Details as CSV</label><br/>
                <input type="checkbox" name="attached"/> <label>Details as CSV</label><br/>
                <input type="checkbox" name="attached"/> <label>Details as CSV</label><br/>
              </div>
            </div>

          </div>


        </div>
      </div>

    );

}

export default ModalContent;

