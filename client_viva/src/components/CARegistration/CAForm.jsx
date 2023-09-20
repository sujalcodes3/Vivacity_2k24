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
    if (personalDetails.Phone.length !== 10) {
      return;
    }
    if (personalDetails.ConfirmPass != personalDetails.CreatePass) {
      return;
    }
    if (
      personalDetails.Name === "" ||
      personalDetails.ConfirmPass === "" ||
      personalDetails.CreatePass === "" ||
      personalDetails.Gender === "" ||
      personalDetails.Phone === ""
    ) {
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
      return;
    } else if (collegeDetails.Year > 2028 || collegeDetails.Year < 2018) {
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
    event.preventDefault();
    // You can use LoginEmail and LoginPassword to check user from DataBase
    console.log(LoginEmail, LoginPassword);
  };

  return (
    <div>
      {/*  L O G I N   S E C T I O N */}

      <div className="LogInButton">
        <button className="Login" onClick={showLoginHandler}>
          LOG IN
        </button>
      </div>
      {/* L O G I N   F O R M  */}
      {LoginForm && (
        <div>
          <h1>Log IN</h1>
          <input
            type="email"
            placeholder="Email Id*"
            name="LoginEmail"
            onChange={loginValuesChangeHandler}
            value={LoginEmail}
          ></input>
          <input
            type="password"
            placeholder="Password*"
            name="LoginPass"
            onChange={loginValuesChangeHandler}
            value={LoginPassword}
          ></input>
          <button className="FormLoginButton" onClick={LoginHandler}>
            Log In
          </button>
          <p>
            Dont have an account? <span>Link for Register Page</span>
          </p>
        </div>
      )}

      {/* P E R S O N A L   D E T A I L S   F O R M  */}

      {formDisplay && !LoginForm && (
        <form>
          {!collegeForm && (
            <div className="PersonalDetails">
              <div>
                <p>Step {StepNumber}/2</p>
                <h4>Personal Details</h4>
              </div>
              <div className="PersonalDetailsForm">
                <input
                  placeholder="Name *"
                  type="text"
                  name="Name"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.Name}
                ></input>
                <input
                  placeholder="Select Gender *"
                  type="text"
                  name="Gender"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.Gender}
                ></input>
                <input
                  placeholder="Create Password *"
                  type="password"
                  name="CreatePass"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.CreatePass}
                ></input>
                <input
                  placeholder="Email ID *"
                  type="email"
                  name="Email"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.Email}
                ></input>
                <input
                  placeholder="Phone Number *"
                  type="number"
                  name="Phone"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.Phone}
                ></input>
                <input
                  placeholder="Confirm Password *"
                  type="password"
                  name="ConfirmPass"
                  onChange={personalDetailsChangeHandler}
                  value={personalDetails.ConfirmPass}
                ></input>
                <button onClick={NextFormHandler}>Next</button>
                <button onClick={PersonalDetailsClearHandler}>Clear</button>
              </div>
            </div>
          )}

          {/* C O L L E G E   D E T A I L S   F O R M  */}

          {collegeForm && !LoginForm && (
            <div className="CollegeDetails">
              <div>
                <p>Step {StepNumber}/2</p>
                <h4>College Details</h4>
              </div>
              <div className="CollegeDetailsForm">
                <select
                  id="country-state"
                  name="State"
                  onChange={collegeDetailsChangeHandler}
                >
                  <option value="" disabled selected>
                    Select State
                  </option>
                  {stateValues.map((name, index) => (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="District *"
                  name="District"
                  value={collegeDetails.District}
                  onChange={collegeDetailsChangeHandler}
                ></input>
                <input
                  type="text"
                  name="CollegeName"
                  placeholder="College Name*"
                  value={collegeDetails.CollegeName}
                  onChange={collegeDetailsChangeHandler}
                ></input>
                <input
                  type="text"
                  name="Degree"
                  placeholder="Degree*"
                  value={collegeDetails.Degree}
                  onChange={collegeDetailsChangeHandler}
                ></input>
                <input
                  type="number"
                  name="Year"
                  placeholder="Year of Graduation*"
                  value={collegeDetails.Year}
                  onChange={collegeDetailsChangeHandler}
                ></input>
                <button onClick={CollegeDetailsSubmitHandler}>Submit</button>
                <button onClick={CollegeDetailsClearHandler}>Clear</button>
              </div>
            </div>
          )}
        </form>
      )}

      {/* S u c c e s s F u l l   R e g i s t r a t i o n  */}

      {!formDisplay && (
        <div className="RegistrationSuccessFull">
          <h1>Registration Successfull</h1>
          <p>See You at Vivacity</p>
          <p>Till then be Vivacious</p>
        </div>
      )}
    </div>
  );
};
export default CAForm;
