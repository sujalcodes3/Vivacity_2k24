import { useState } from "react";
import "./CAForm.css";

const stateValues = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const CAForm = () => {
  //  VALUES FOR RESETTING THE FORM
  const InitialValues = {
    Name: "",
    Gender: "",
    CreatePass: "",
    Email: "",
    Phone: "",
    ConfirmPass: "",
  };
  const InitialCollegeValues = {
    State: "",
    District: "",
    CollegeName: "",
    Degree: "",
    Year: "",
  };

  const [personalDetails, setPersonalDetails] = useState(InitialValues);
  const [collegeDetails, setCollegeDetails] = useState(InitialCollegeValues);
  const [LoginForm, showLoginForm] = useState(false);
  const [collegeForm, showCollegeDetails] = useState(false);
  const [formDisplay, showForm] = useState(true);
  const [StepNumber, setStepNumber] = useState(1);
  const [Warning, setWarning] = useState("");
  //   P E R S O N A L   D E T A I L S  S E C T I O N

  const personalDetailsChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };
  const NextFormHandler = (event) => {
    event.preventDefault();
    if (
      personalDetails.Name === "" ||
      personalDetails.ConfirmPass === "" ||
      personalDetails.CreatePass === "" ||
      personalDetails.Gender === "" ||
      personalDetails.Phone === ""
    ) {
      setWarning("Enter All Fields");
      return;
    }
    if (personalDetails.Phone.length !== 10) {
      setWarning("Phone Number Digits Not equal to 10");
      return;
    }
    if (personalDetails.ConfirmPass != personalDetails.CreatePass) {
      setWarning("Passwords Do Not Match");
      return;
    }
    if (
      personalDetails.Name === "" ||
      personalDetails.ConfirmPass === "" ||
      personalDetails.CreatePass === "" ||
      personalDetails.Gender === "" ||
      personalDetails.Phone === ""
    ) {
      setWarning("Enter All Fields");
      return;
    } else {
      //  Will Show the College Details Form
      setStepNumber(2);
      showCollegeDetails(true);
    }
  };

  const PersonalDetailsClearHandler = (event) => {
    event.preventDefault();
    setPersonalDetails(InitialValues);
  };

  //    C O L L E G E   D E T A I L S   S E C T I O N

  const CollegeDetailsClearHandler = (event) => {
    event.preventDefault();
    setCollegeDetails(InitialCollegeValues);
  };
  const collegeDetailsChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCollegeDetails({
      ...collegeDetails,
      [name]: value,
    });
  };
  const CollegeDetailsSubmitHandler = (event) => {
    event.preventDefault();
    if (
      collegeDetails.District === "" ||
      collegeDetails.Degree === "" ||
      collegeDetails.CollegeName === "" ||
      collegeDetails.Year === "" ||
      collegeDetails.State === ""
    ) {
      setWarning("Enter All Fields");
      return;
    } else if (collegeDetails.Year > 2028 || collegeDetails.Year < 2018) {
      setWarning("College year should be >2028 and <2018");
      return;
    }
    //  Will Submit the Form
    SubmitHandler();
  };

  //    F O R M   S U B M I T   H A N D L E R
  const SubmitHandler = () => {
    //  All the values required for DataBase is stored in personalDetails and collegeDetails
    console.log("Personal Details are ", personalDetails);
    console.log("College Details are ", collegeDetails);
    showForm(false);
  };

  //    L O G I N   S E C T I O N
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const loginValuesChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "LoginEmail") {
      setLoginEmail(value);
    } else if (name === "LoginPass") {
      setLoginPassword(value);
    }
  };

  const showLoginHandler = () => {
    showLoginForm(true);
  };

  const LoginHandler = (event) => {
    if (LoginEmail === "" || LoginPassword === "") {
      setWarning("Enter All Fields");
    }
    event.preventDefault();
    // You can use LoginEmail and LoginPassword to check user from DataBase
    console.log(LoginEmail, LoginPassword);
  };

  return (
    <div className="lg:flex lg:justify-center">
      {/* Left Column */}
      <div className="lg:w-1/2 px-4 py-8">
        {/* L O G I N   S E C T I O N */}
        {!LoginForm && (
          <div className="LogInButton">
            <button
              className="bg-blue-500 text-white mx-80 px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={showLoginHandler}
            >
              LOG IN
            </button>
          </div>
        )}
        {/* L O G I N   F O R M  */}
        {LoginForm && (
          <div className="mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h1 className="text-2xl font-semibold text-white mb-4">Log IN</h1>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg mb-2"
              type="email"
              placeholder="Email Id*"
              name="LoginEmail"
              onChange={loginValuesChangeHandler}
              value={LoginEmail}
            ></input>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg mb-2"
              type="password"
              placeholder="Password*"
              name="LoginPass"
              onChange={loginValuesChangeHandler}
              value={LoginPassword}
            ></input>
            <p className="text-white text-center">{Warning}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={LoginHandler}
            >
              Log In
            </button>
            <p className="mt-2 text-gray-300">
              Dont have an account?{" "}
              <span className="text-cyan-300">Link for Register Page</span>
            </p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 px-8 py-8 mx-auto ">
        {/* P E R S O N A L   D E T A I L S   F O R M */}
        {formDisplay && !LoginForm && (
          <form>
            {!collegeForm && (
              <div className="PersonalDetails p-8 bg-gray-800">
                <div>
                  <p className="text-xl text-white">Step {StepNumber}/2</p>
                  <h4 className="text-2xl font-semibold text-white">
                    Personal Details
                  </h4>
                </div>
                <div className="PersonalDetailsForm mt-4 space-y-4">
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    placeholder="Name *"
                    type="text"
                    name="Name"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.Name}
                  ></input>
                  <select
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    name="Gender"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.Gender}
                  >
                    <option value="">Select Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>

                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    placeholder="Create Password *"
                    type="password"
                    name="CreatePass"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.CreatePass}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    placeholder="Email ID *"
                    type="email"
                    name="Email"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.Email}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    placeholder="Phone Number *"
                    type="number"
                    name="Phone"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.Phone}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    placeholder="Confirm Password *"
                    type="password"
                    name="ConfirmPass"
                    onChange={personalDetailsChangeHandler}
                    value={personalDetails.ConfirmPass}
                  ></input>
                  <p className="text-white text-center">{Warning}</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    onClick={NextFormHandler}
                  >
                    Next
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                    onClick={PersonalDetailsClearHandler}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}

            {/* C O L L E G E   D E T A I L S   F O R M */}
            {collegeForm && !LoginForm && (
              <div className="CollegeDetails p-8  mx-5 bg-gray-800">
                <div>
                  <p className="text-xl text-white">Step {StepNumber}/2</p>
                  <h4 className="text-2xl font-semibold text-white">
                    College Details
                  </h4>
                </div>
                <div className="CollegeDetailsForm mt-4 space-y-4">
                  <select
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    id="country-state"
                    name="State"
                    onChange={collegeDetailsChangeHandler}
                  >
                    <option value="" className="w-1/2" disabled selected>
                      Select State
                    </option>
                    {stateValues.map((name, index) => (
                      <option className="w-1/2" key={index} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>

                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    type="text"
                    placeholder="District *"
                    name="District"
                    value={collegeDetails.District}
                    onChange={collegeDetailsChangeHandler}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    type="text"
                    name="CollegeName"
                    placeholder="College Name*"
                    value={collegeDetails.CollegeName}
                    onChange={collegeDetailsChangeHandler}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    type="text"
                    name="Degree"
                    placeholder="Degree*"
                    value={collegeDetails.Degree}
                    onChange={collegeDetailsChangeHandler}
                  ></input>
                  <input
                    className="w-full px-4 py-2 bg-gray-700 text-white border rounded-lg"
                    type="number"
                    name="Year"
                    placeholder="Year of Graduation*"
                    value={collegeDetails.Year}
                    onChange={collegeDetailsChangeHandler}
                  ></input>
                  <p className="text-white text-center">{Warning}</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    onClick={CollegeDetailsSubmitHandler}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                    onClick={CollegeDetailsClearHandler}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>

      {/* S u c c e s s F u l l   R e g i s t r a t i o n */}
      {!formDisplay && !LoginForm && (
        <div className="RegistrationSuccessFull">
          <h1 className="text-2xl font-semibold text-cyan-300">
            Registration Successful
          </h1>
          <p className=" text-cyan-300">See You at Vivacity</p>
          <p className=" text-cyan-300">Till then be Vivacious</p>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};
export default CAForm;
