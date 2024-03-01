import React from 'react';
import './Sidebar.css';

function MyComponent() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="file-select">
            <label htmlFor="file-select" className="file-select-label">Select a file:</label>
            <select id="file-select" className="file-select-dropdown">
              <option value="file1.js">File 1</option>
              <option value="file2.js">File 2</option>
              <option value="file3.js">File 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default MyComponent;