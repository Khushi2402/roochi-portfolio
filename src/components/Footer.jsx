import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-red-700 sm:justify-start">
              Roochi's Space
            </div>

            <p className="mt-4 text-center text-sm text-red-900 lg:mt-0 lg:text-right">
              Copyright &copy; 2025. Made with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
