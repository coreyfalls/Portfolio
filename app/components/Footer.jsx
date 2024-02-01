import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <address className="text-sm md:mr-8">Have a nice day, stay vigilant!</address>
        <p className="text-sm text-slate-600 mt-4 md:mt-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
