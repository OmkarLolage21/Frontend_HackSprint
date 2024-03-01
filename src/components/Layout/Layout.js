import React from 'react';
import Header from './Header.js';
import Sidebar from '../Layout/SideBar.js';

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <span><main style={{minHeight:"80vh"}}>
         {children};
         <Sidebar/>
         <div className="main-content">
      <div className="upload-container">
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-area">
            <p>Drag and drop files here or click to select</p>
            <input type="file" id="file-upload" className="file-upload-input" />
          </div>
        </label>
      </div>
    </div>
        </main></span>
        
    </div>
  );
};
export default Layout

