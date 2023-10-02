import { useState } from "react";
import FormImage from "../../assets/FormImage.jpg";
import CaForm from "./CaForm";
import CaLoginForm from "./CaLoginForm";

const CaRegistrationPage = () => {
  const [DisplayLoginForm, setDisplayLoginForm] = useState(false);

  const showLoginForm = () => {
    setDisplayLoginForm(!DisplayLoginForm);
  };

  const pageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div
      style={{
        ...pageStyle,
        backgroundImage: `url(${FormImage})`,
      }}
      className="flex flex-col items-center"
    >
      <div className="inline-flex text-center -ml-0 flex-col lg:flex-row lg:ml-32  items-center">
        <div className="text-center ml-0">
          <h1
            className="text-6xl lg:text-7xl text-white font-semibold mt-2 mb-1 text-center"
            style={{ fontFamily: "Maven Pro, sans-serif" }}
          >
            Registration
          </h1>
          <h1
            className="text-3xl lg:text-4xl font-semibold mb-4 text-center"
            style={{ fontFamily: "Maven Pro, sans-serif" }}
          >
            Campus Ambassador
          </h1>
        </div>
        {/* Log In and Register buttons */}
        <div className=" mt-0  relative lg:left-1/2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white text-2xl py-2 px-6 rounded-lg"
            onClick={showLoginForm}
          >
            {DisplayLoginForm ? "Register" : "Log In"}
          </button>
        </div>
      </div>

      <div className="-mt-2">
        {!DisplayLoginForm ? <CaForm /> : <CaLoginForm Click={showLoginForm} />}
      </div>
    </div>
  );
};

export default CaRegistrationPage;
