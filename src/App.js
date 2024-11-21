import React, { useState } from "react";
import * as XLSX from "xlsx";

const instanceUrl = process.env.REACT_APP_SN_INSTANCE;
const username = process.env.REACT_APP_SN_USERNAME;
const password = process.env.REACT_APP_SN_PASSWORD;
const sysID = "7e53f232974bb158d090f6d3f153afe6";

const uploadToServiceNow = (blob) => {
  const formData = new FormData();
  formData.append("table_name", "incident");
  formData.append("table_sys_id", sysID);

  const fileToUpload = new File([blob], "formData.csv", {
    type: "text/csv;charset=utf-8;",
  });
  formData.append("file", fileToUpload);

  const headers = new Headers();
  headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));
  headers.append("Accept", "application/json");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: formData,
    credentials: "same-origin",
  };

  fetch(`${instanceUrl}/api/now/attachment/upload`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("File:", data);
    })
    .catch((error) => {
      console.error("Error file:", error);
    });
};

const generateCSV = (formData) => {
  const data = [
    ["Name", "ID", "AWS ID"],
    [formData.name, formData.id, formData.awsID],
  ];
  const ws = XLSX.utils.aoa_to_sheet(data);
  const csv = XLSX.utils.sheet_to_csv(ws);

  console.log("CSV Content:", csv);

  const blob = new Blob([csv], { type: "text/csv;" });
  const url = URL.createObjectURL(blob);
  return { blob, url };
};

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    awsID: "",
  });
  const [csvData, setCsvData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerateCSV = () => {
    const { blob, url } = generateCSV(formData);
    setCsvData({ blob, url });
  };

  const handleUpload = () => {
    if (csvData) {
      uploadToServiceNow(csvData.blob);
    } else {
      alert("Please create a file");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>File creation (CSV) and upload</h1>

      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor='id'>ID:</label>
          <input
            type='text'
            id='id'
            name='id'
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor='awsID'>AWS ID:</label>
          <input
            type='text'
            id='awsID'
            name='awsID'
            value={formData.awsID}
            onChange={handleInputChange}
          />
        </div>

        <button
          type='button'
          onClick={handleGenerateCSV}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}>
          Crea il CSV
        </button>

        {csvData && (
          <a
            href={csvData.url}
            download='formData.csv'
            style={{
              display: "block",
              marginTop: "20px",
              textDecoration: "none",
              color: "blue",
            }}>
            Scarica il CSV
          </a>
        )}

        <button
          type='button'
          onClick={handleUpload}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}>
          Invia a ServiceNow
        </button>
      </form>
    </div>
  );
};

export default App;
