import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created By Mr.Shylu</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
