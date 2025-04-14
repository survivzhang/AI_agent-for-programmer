import React from 'react';
import './globals.css';

const Page = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <a className="navItem">Log in</a>
        <a className="navItemSignUp">Sign up</a>
      </nav>

      <main className="main">
        <h1 className="title">Which kinds of job interview you want to Perpare?</h1>
        <div className="searchContainer">
          <input
            type="text"
            className="searchInput"
            placeholder="Enter the company name"
          />
          <div className="dropdownIcon">▼</div>
        </div>
      </main>
    </div>
  );
};


export default Page;
