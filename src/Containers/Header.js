import React from 'react';

const Header = () => {
  return (
    <nav style={{ background: 'lightblue', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><a href="/">Home</a></li>
        <li><a href="/signUp">Sign Up</a></li>
        <li><a href="/logIn">Log In</a></li>
      </ul>
    </nav>
  );
};

export default Header;