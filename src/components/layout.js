import React from 'react';
import './layout.css';
import Papa from 'papaparse';


const Layout = ({uploadData }) => {
    const fileUpload = (event) => {
        const file = event.target.files[0];
    
        Papa.parse(file, {
          header: true,
          complete: function (results) {
          uploadData (results.data);
          },
        });
      };
    return (
      <div className="layout">
        <img className="layout-image" src="Group 3.png" />
        <div className="layout-text">
          Hey, Upload Hubstaff CSV file to Continue
        </div>

        <label class="custom-file-upload">
          <input type="file" onChange={fileUpload} />
          Upload from your device
        </label>

        <div className="layout-text-buttom">
          Or drag files to this zone, .csv file up to 1 mb
        </div>
      </div>
    );
}

export default Layout;
