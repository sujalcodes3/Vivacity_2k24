import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stateValues = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];

const CaForm = () => {
    const navigate = useNavigate();
    //  VALUES FOR RESETTING THE FORM
    const InitialValues = {
        Name: '',
        Gender: '',
        CreatePass: '',
        Email: '',
        Phone: '',
        ConfirmPass: '',
    };
    const InitialCollegeValues = {
        State: '',
        District: '',
        CollegeName: '',
        Degree: '',
        Year: '',
    };

    const [personalDetails, setPersonalDetails] = useState(InitialValues);
    const [collegeDetails, setCollegeDetails] = useState(InitialCollegeValues);
    const [collegeForm, showCollegeDetails] = useState(false);
    const [formDisplay, showForm] = useState(true);
    const [Warning, setWarning] = useState('');
    //   P E R S O N A L   D E T A I L S  S E C T I O N

    const personalDetailsChangeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setPersonalDetails({
            ...personalDetails,
            [name]: value,
        });
    };
    const NextFormHandler = event => {
        event.preventDefault();
        if (
            personalDetails.Name === '' ||
            personalDetails.ConfirmPass === '' ||
            personalDetails.CreatePass === '' ||
            personalDetails.Gender === '' ||
            personalDetails.Phone === ''
        ) {
            setWarning('Enter All Fields');
            return;
        }
        if (personalDetails.Phone.length !== 10) {
            setWarning('Phone Number Digits Not equal to 10');
            return;
        }
        if (personalDetails.ConfirmPass != personalDetails.CreatePass) {
            setWarning('Passwords Do Not Match');
            return;
        }
        if (
            personalDetails.Name === '' ||
            personalDetails.ConfirmPass === '' ||
            personalDetails.CreatePass === '' ||
            personalDetails.Gender === '' ||
            personalDetails.Phone === ''
        ) {
            setWarning('Enter All Fields');
            return;
        } else {
            //  Will Show the College Details Form
            showCollegeDetails(true);
        }
    };

    const PersonalDetailsClearHandler = event => {
        event.preventDefault();
        setPersonalDetails(InitialValues);
    };

    //    C O L L E G E   D E T A I L S   S E C T I O N

    const CollegeDetailsClearHandler = event => {
        event.preventDefault();
        setCollegeDetails(InitialCollegeValues);
    };
    const collegeDetailsChangeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setCollegeDetails({
            ...collegeDetails,
            [name]: value,
        });
    };
    const CollegeDetailsSubmitHandler = event => {
        event.preventDefault();
        if (
            collegeDetails.District === '' ||
            collegeDetails.Degree === '' ||
            collegeDetails.CollegeName === '' ||
            // collegeDetails.Year === "" ||
            collegeDetails.State === ''
        ) {
            setWarning('Enter All Fields');
            return;
        }
        // } else if (collegeDetails.Year > 2028 || collegeDetails.Year < 2018) {
        //   setWarning("College year should be >2028 and <2018");
        //   return;
        // }
        //  Will Submit the Form
        navigate('/successful');
        SubmitHandler();
    };

    //    F O R M   S U B M I T   H A N D L E R
    const SubmitHandler = () => {
        //  All the values required for DataBase is stored in personalDetails and collegeDetails
        console.log('Personal Details are ', personalDetails);
        console.log('College Details are ', collegeDetails);
        showForm(false);
    };

    return (
        <div className="lg:flex lg:justify-center">
            <div className="lg:w-1/2 px-8 py-8 mx-auto ">
                {/* P E R S O N A L   D E T A I L S   F O R M */}
                {formDisplay && (
                    <form>
                        {!collegeForm && (
                            <div className="PersonalDetails p-4 bg-white rounded-xl">
                                <div>
                                    <p className="text-xl text-black">
                                        Step 1/2
                                    </p>
                                    <h4 className="text-3xl font-semibold text-black">
                                        Personal Details
                                    </h4>
                                </div>
                                <div className="PersonalDetailsForm mt-4 space-y-4">
                                    <div className="PersonalDetailsForm mt-4 space-y-4">
                                        <input
                                            className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                            placeholder="Name *"
                                            type="text"
                                            name="Name"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.Name}
                                        ></input>
                                        <input
                                            className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                            placeholder="Email ID *"
                                            type="email"
                                            name="Email"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.Email}
                                        ></input>
                                        <input
                                            className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                            placeholder="Phone Number *"
                                            name="Phone"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.Phone}
                                        ></input>

                                        <select
                                            className="w-full px-4 py-2 bg-white text-gray-600 border border-black rounded-lg"
                                            name="Gender"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.Gender}
                                        >
                                            <option value="">
                                                Select Gender *
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="Others">
                                                Others
                                            </option>
                                        </select>

                                        <input
                                            className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                            placeholder="Create Password *"
                                            type="password"
                                            name="CreatePass"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.CreatePass}
                                        ></input>

                                        <input
                                            className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                            placeholder="Confirm Password *"
                                            type="password"
                                            name="ConfirmPass"
                                            onChange={
                                                personalDetailsChangeHandler
                                            }
                                            value={personalDetails.ConfirmPass}
                                        ></input>
                                    </div>

                                    <p className="text-sky-700 text-center">
                                        {Warning}
                                    </p>
                                    <button
                                        className="bg-blue-500 text-white mx-4 px-8 py-2 rounded-lg hover:bg-blue-600"
                                        onClick={NextFormHandler}
                                    >
                                        Next
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-700 mx-4 px-8 py-2 rounded-lg hover:bg-gray-400"
                                        onClick={PersonalDetailsClearHandler}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* C O L L E G E   D E T A I L S   F O R M */}
                        {collegeForm && (
                            <div className="CollegeDetails p-6  mx-0 bg-white rounded-xl">
                                <div>
                                    <p className="text-xl text-black">
                                        Step 2/2
                                    </p>
                                    <h4 className="text-3xl font-semibold text-black">
                                        College Details
                                    </h4>
                                </div>
                                <div className="CollegeDetailsForm mt-4 space-y-4">
                                    <select
                                        className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                        id="country-state"
                                        name="State"
                                        onChange={collegeDetailsChangeHandler}
                                    >
                                        <option
                                            value=""
                                            className="w-1/2"
                                            disabled
                                            selected
                                        >
                                            Select State
                                        </option>
                                        {stateValues.map((name, index) => (
                                            <option
                                                className="w-1/2"
                                                key={index}
                                                value={name}
                                            >
                                                {name}
                                            </option>
                                        ))}
                                    </select>

                                    <input
                                        className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                        type="text"
                                        placeholder="District *"
                                        name="District"
                                        value={collegeDetails.District}
                                        onChange={collegeDetailsChangeHandler}
                                    ></input>
                                    <input
                                        className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                        type="text"
                                        name="CollegeName"
                                        placeholder="College Name*"
                                        value={collegeDetails.CollegeName}
                                        onChange={collegeDetailsChangeHandler}
                                    ></input>
                                    <input
                                        className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                                        type="text"
                                        name="Degree"
                                        placeholder="Degree*"
                                        value={collegeDetails.Degree}
                                        onChange={collegeDetailsChangeHandler}
                                    ></input>
                                    {/* <input
                    className="w-full px-4 py-2 bg-white text-gray-700 border border-black rounded-lg"
                    type="number"
                    name="Year"
                    placeholder="Year of Graduation*"
                    value={collegeDetails.Year}
                    onChange={collegeDetailsChangeHandler}
                  ></input> */}
                                    <p className="text-sky-700 text-center">
                                        {Warning}
                                    </p>
                                    <button
                                        className="bg-blue-500 text-white px-4 mx-2 py-2 rounded-lg hover:bg-blue-600"
                                        onClick={CollegeDetailsSubmitHandler}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-700 mx-2 px-4 py-2 rounded-lg hover:bg-gray-400"
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
        </div>
    );
};
export default CaForm;
