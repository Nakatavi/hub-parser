import React, { useEffect, useState } from "react";
import "../styles/layout.css";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

const Layout = ({ loadData }) => {
  const navigate = useNavigate();
  
  const parseCsvFile = (file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete: function (results) {
          resolve(results.data);
        },
        error: function (error) {
          reject(error);
        }
      });
    });
  };
  
  const fileUpload = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      parseCsvFile(file)
        .then((parsedData) => {
          loadData(parsedData);
          navigate("/results");
        })
        .catch((error) => {
          console.error("Error parsing CSV file:", error);
        });
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div className="layout">
      <img className="layout-image" src="Group 3.png" alt="Greenbag"/>
      <div className="layout-text">
        Hey, Upload Hubstaff CSV file to Continue
      </div>

      <label className="custom-file-upload">
        <input type="file" onChange={fileUpload} />
        Upload from your device
      </label>

      <div className="layout-text-buttom">
        Or drag files to this zone, .csv file up to 1 mb
      </div>
    </div>
  );
};

export default Layout;
