import { useRef, useState } from 'react';
import EventsForm from '../components/NormalRegistration/EventsForm';
import IsParticipantForm from '../components/NormalRegistration/IsParticipantForm';
import NormNav from '../components/NormalRegistration/NormNav';
import NormalForm from '../components/NormalRegistration/NormalForm';
import RegistrationSuccessful from '../components/NormalRegistration/RegistrationSuccessful';
import './normalregistration.css';
import Form from '../components/NormalRegistration/Form';
import DisplayEvents from '../components/NormalRegistration/DisplayEvents';
import NormalButton from '../components/NormalRegistration/NormalButton';

const NormalRegistration = () => {
    //default values
    const defaultPersonal = {
        name: '',
        email: '',
        mobile: '',
        institute: '',
        referral: '',
    };
    const defaultEvent = {
        eventCategory: '',
        eventName: '',
        teamSize: '',
        captain: false,
        teamName: '',
        teamMembers: '',
    };

    //state
    const [personalDetails, setPersonalDetails] = useState(defaultPersonal);
    const [eventDetails, setEventDetails] = useState(defaultEvent);
    const [events, setEvents] = useState([]);
    const [warning, setWarning] = useState('');
    const [isParticipant, setIsParticipant] = useState(null);
    const [isReset,setIsReset] = useState(false);
    //refs
    const warningRef = useRef();
    const personalDetailsForm = useRef();
    const isParticipantForm = useRef();
    const eventDetailsForm = useRef();
    const registrationSuccessful = useRef();
    //regex
    const numberRegex = /^[0-9]*$/;
    const phoneRegex =
        /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
    const nameRegex = /^[a-zA-Z ]*$/;
    const namesRegex = /^[a-zA-Z ,]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // hide/show components
    const hide = ref => {
        ref.current.classList.add('hidden');
    };
    const show = ref => {
        ref.current.classList.remove('hidden');
    };

    //handle change in state
    const handlePersonalChange = e => {
        const { name, value } = e.target;

        setPersonalDetails({
            ...personalDetails,
            [name]: value,
        });
    };

    const handleIsParticipantChange = e => {
        if (e.target.value == 'Yes') {
            setIsParticipant(true);
        } else if (e.target.value == 'No') {
            setIsParticipant(false);
        }
    };

    const handleEventChange = e => {
        let { name, value } = e.target;

        if (name == 'captain') {
            if (value == 'Yes') {
                value = true;
            } else if (value == 'No') {
                value = false;
            }
        }

        setEventDetails({
            ...eventDetails,
            [name]: value,
        });
    };
    //submit forms
    const handlePersonalSubmit = e => {
        e.preventDefault();

        if (
            !personalDetails.name ||
            !personalDetails.email ||
            !personalDetails.mobile ||
            !personalDetails.institute
        ) {
            setWarning('Fill all the non-optional details');
            warningRef.current.showModal();
            return;
        } else if (!emailRegex.test(personalDetails.email)) {
            setWarning('Email is not valid');
            warningRef.current.showModal();
            return;
        } else if (!nameRegex.test(personalDetails.name)) {
            setWarning('Name should only contain alphabets');
            warningRef.current.showModal();
            return;
        } else if (!nameRegex.test(personalDetails.institute)) {
            setWarning('Institute Name should only contain alphabets');
            warningRef.current.showModal();
            return;
        } else if (!phoneRegex.test(personalDetails.mobile)) {
            setWarning('Enter a valid phone number');
            warningRef.current.showModal();
            return;
        } else {
            setWarning('');
            hide(personalDetailsForm);
            show(isParticipantForm);
        }
    };

    const handleIsParticipantSubmit = e => {
        e.preventDefault();

        if (isParticipant === null) {
            setWarning('Please Select if you are a participant');
            warningRef.current.showModal();
            return;
        }
        setWarning('');
        hide(isParticipantForm);
        if (isParticipant) {
            show(eventDetailsForm);
        } else {
            show(registrationSuccessful);
        }
    };

    const handleEventsAdd = e => {
        e.preventDefault();
        // removed the !eventDetails.captain condition
        if (
            !eventDetails.eventCategory ||
            !eventDetails.eventName ||
            !eventDetails.teamSize ||
            !eventDetails.teamName
        ) {
            setWarning('Fill all the Details');
            warningRef.current.showModal();
            return;
        } else if (!nameRegex.test(eventDetails.teamName)) {
            setWarning('Team Name should only contain alphabets');
            warningRef.current.showModal();
            return;
        } else if (!namesRegex.test(eventDetails.teamMembers)) {
            setWarning(
                'Team Member Name should only contain alphabets and be seperated by comma',
            );
            warningRef.current.showModal();
            return;
        } else if (!numberRegex.test(eventDetails.teamSize)) {
            setWarning('Team Size should be a number');
            warningRef.current.showModal();
            return;
        } else {
            setEvents([...events, eventDetails]);
            setIsReset(true);
            setEventDetails(defaultEvent);
        }
    };

    const handleEventsSubmit = e => {
        e.preventDefault();
        setWarning('');
        hide(eventDetailsForm);
        show(registrationSuccessful);
    };

    return (
        <div className=" w-full min-h-screen bg-cover flex flex-col justify-start gap-4 bg-no-repeat normal-page">
            <NormNav />
            {/*Pre Registration Form*/}
            <div ref={personalDetailsForm}>
                <NormalForm
                    change={handlePersonalChange}
                    submit={handlePersonalSubmit}
                />
            </div>
            {/*Checking if it is a participant Form*/}
            <div ref={isParticipantForm} className="hidden">
                <IsParticipantForm
                    change={handleIsParticipantChange}
                    submit={handleIsParticipantSubmit}
                />
            </div>
            {/* Successful Registration */}
            <div ref={registrationSuccessful} className="hidden">
                <RegistrationSuccessful />
            </div>
            {/*Event Registration Form*/}
            <div ref={eventDetailsForm} className="hidden">
                <EventsForm
                    event = {eventDetails}
                    events={events}
                    isReset={isReset}
                    reset = {setIsReset}
                    change={handleEventChange}
                    submit={handleEventsSubmit}
                    add={handleEventsAdd}
                />
                {events.length > 0 && <DisplayEvents events={events} />}
            </div>

            {/* Error Popup */}
            <dialog
                ref={warningRef}
                className=" w-[90vw] mx-auto bg-transparent"
            >
                <Form>
                    <p className="mt-4 text-red-500">{warning}</p>
                    <NormalButton
                        text="close"
                        handler={e => {
                            e.preventDefault();
                            warningRef.current.close();
                        }}
                    />
                </Form>
            </dialog>
        </div>
    );
};

export default NormalRegistration;
