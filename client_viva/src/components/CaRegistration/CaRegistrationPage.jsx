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
    backgroundImage: `url(${FormImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={pageStyle}
      className="h-screen overflow-hidden justify-center items-center"
    >
      <div className="inline-flex flex-col lg:flex-row">
        <div className="text-center ml-0">
          <h1
            className="text-5xl lg:text-6xl text-white font-semibold mt-0 mb-2 text-center"
            style={{ fontFamily: "Maven Pro, sans-serif" }}
          >
            Registration
          </h1>
          <h1
            className="text-3xl lg:text-3xl font-semibold mb-4 text-center"
            style={{ fontFamily: "Maven Pro, sans-serif" }}
          >
            Campus Ambassador
          </h1>
        </div>

        <div
          className={`mt-0 ${
            DisplayLoginForm ? "lg:ml-0 lg:mt-20" : "ml-0 space-x-8 mt-20"
          }`}
        >
          {/* Log In button */}
          {!DisplayLoginForm && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={showLoginForm}
            >
              Log In
            </button>
          )}
          {/* Register button */}
          {DisplayLoginForm && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={showLoginForm}
            >
              Register
            </button>
          )}
        </div>
      </div>

      <div className="mt-4">
        {!DisplayLoginForm && <CaForm />}
        {DisplayLoginForm && <CaLoginForm Click={showLoginForm} />}
      </div>
    </div>
  );
};

export default CaRegistrationPage;
