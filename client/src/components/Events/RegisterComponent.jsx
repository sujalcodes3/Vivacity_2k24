import { Link } from 'react-router-dom';
import RuleBook from '../../assets/EventsImages/RuleBook.png';
import Register from '../../assets/EventsImages/Register.png';

const RegisterComponent = ({rulebook}) => {
    return (
        <div className="flex flex-row px-[20%] gap-2 lg:px-0 z-[100]">
            {rulebook?.length > 0 && <a href={rulebook} target='_blank' className={`cursor-pointer z-[100]`} >
                <img className="lg:w-2/3 min-w-[120px]" src={RuleBook} alt="" />
            </a>}
            <Link to="/registration">
                <img className="lg:w-2/3 min-w-[60px]" src={Register} alt="" />
            </Link>
        </div>
    );
};

export default RegisterComponent;
