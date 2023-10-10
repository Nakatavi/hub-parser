import React from 'react';
import Papa from 'papaparse';

const FileUpload = ({uploadData }) => {

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
    <div>
      <input type="file" onChange={fileUpload} />
    </div>
  );
}

export default FileUpload;
