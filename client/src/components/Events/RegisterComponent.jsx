import { Link } from 'react-router-dom';
import RuleBook from '../../assets/EventsImages/RuleBook.png';
import Register from '../../assets/EventsImages/Register.png';

const RegisterComponent = ({rulebook}) => {
    return (
        <div className="flex flex-row px-[20%] gap-2 lg:gap-6 justify-center lg:px-0">
            {rulebook?.length > 0 && <a href={rulebook} target='_blank' className={`cursor-pointer z-[100]`} >
                <img className="lg:w-[320px] min-w-[120px]" src={RuleBook} alt="" />
            </a>}
            <Link to="/registration">
                <img className="lg:w-[160px] min-w-[60px]" src={Register} alt="" />
            </Link>
        </div>
    );
};

export default RegisterComponent;
