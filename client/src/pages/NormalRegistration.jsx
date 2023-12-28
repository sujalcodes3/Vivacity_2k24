import EventsForm from '../components/NormalRegistration/EventsForm';
import NormNav from '../components/NormalRegistration/NormNav';
import NormalForm from '../components/NormalRegistration/NormalForm';

import './normalregistration.css';

const NormalRegistration = () => {
    return (
        <div className=" w-full min-h-screen bg-cover flex flex-col justify-evenly gap-4 bg-no-repeat normal-page">
            <NormNav />
            {/*Pre Registration Form*/}
            {/* <NormalForm /> */}
            {/*Event Registration Form*/}
            <EventsForm/>
        </div>
    );
};

export default NormalRegistration;
