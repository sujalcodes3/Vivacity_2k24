import { Link } from 'react-router-dom';
import RuleBook from '../../assets/EventsImages/RuleBook.png';
import Register from '../../assets/EventsImages/Register.png';

const RegisterComponent = () => {
    return (
        <div className="flex flex-row px-[20%] gap-2 lg:px-0">
            <Link to="">
                <img className="lg:w-2/3 min-w-[120px]" src={RuleBook} alt="" />
            </Link>
            <Link to="/normalregistration">
                <img className="lg:w-2/3 min-w-[60px]" src={Register} alt="" />
            </Link>
        </div>
    );
};

export default RegisterComponent;
