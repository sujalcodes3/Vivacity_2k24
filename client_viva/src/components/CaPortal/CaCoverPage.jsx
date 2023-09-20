import React from "react";
import "./CaPortalPage.css";
import { Link } from "react-router-dom";

function CaCoverPage() {
  return (
    <div className="ca-coverphoto h-full bg-no-repeat bg-cover bg-center">
      <div className="flex text-white text-xl h-10 justify-between w-full items-center px-16 py-6">
        <div>
          <h4><Link to="/">Logo</Link></h4>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Log In</li>
          </ul>
        </div>
      </div>
      <div className="flex-col justify-center flex h-screen items-center text-white w-9/12 mx-auto">
        <h1 className="text-8xl font-bold mb-4">CAMPUS AMBASSADOR</h1>
        <p className="text-3xl mb-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ea
          eos velit quas cumque nulla.
        </p>
        <Link to="/CA-registeration" className="text-xl border-solid border-2 px-3 py-1 rounded-lg border-white">
          Register
        </Link>
      </div>
    </div>
  );
}

export default CaCoverPage;
