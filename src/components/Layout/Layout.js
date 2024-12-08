import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Header from './Header.js';
import Sidebar from '../Layout/SideBar.js';

const Layout = ({children}) => {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (event) => {
    const files = event.target.files;

    Array.from(files).forEach((file) => {
      setUploadedFiles((prevFiles) => [...prevFiles, file]);
      setSelectedFile(file);
    });
  };

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  
  return (
    <div>
    <Header/>
    <Sidebar/>

    <div className="main-content">
      <div className="uploaded-files">
        <h2>Uploaded Files:</h2>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>

      <div className="upload-container">
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-area">
            <p>Drag and drop PDF files here or click to select</p>
            <input
              type="file"
              id="file-upload"
              className="file-upload-input"
              onChange={handleFileChange}
              accept=".pdf"
              multiple
            />
          </div>
        </label>
      </div>

      {/* {selectedFile && (
        <div className="file-content-container">
          <h2>Selected PDF Content:</h2>
          <div className="pdf-viewer">
            <Document
              file={URL.createObjectURL(selectedFile)}
              onLoadSuccess={onLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      )} */}
    </div>

    </div>
  );
};
export default Layout

