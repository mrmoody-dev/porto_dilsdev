import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Adi Fuadil Hidayah. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;