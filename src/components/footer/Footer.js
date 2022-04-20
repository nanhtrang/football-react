import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-auto">
      <div
        className="text-center p-4"
        style={{backgroundColor: "#ccc"}}
      >
        © {year} Copyright:
        <a className="text-reset fw-bold" href="#/">
          Toan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
