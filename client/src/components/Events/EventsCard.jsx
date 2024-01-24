import { Link } from 'react-router-dom';
import star from '../../assets/Events/star.png';
import RuleBook from '../../assets/Events/RuleBook.png';
import Register from '../../assets/Events/Register.png';

const EventsCard = props => {
    const { Title, Images, Validation } = props;
    return (
        <div
            className=" lg:mx-10 mx-5 px-5 py-10 my-6  flex flex-col gap-8 items-center justify-center"
            style={{
                borderRadius: '35px',
                background: 'rgba(5, 11, 40, 0.60)',
            }}
        >
            <div className="flex flex-row items-center gap-8 ">
                <img alt="star" src={star} />
                <h1
                    className="font-GROBOLD text-purple-900 lg:text-5xl text-3xl font-bold  leading-normal"
                    style={{
                        textShadow: '0.5px 0.8px white',
                        WebkitTextStrokeWidth: '0.8px',
                        WebkitTextStrokeColor: 'white',
                    }}
                >
                    {Title}
                </h1>

                <img alt="star" src={star} />
            </div>
            <div className="flex flex-col lg:flex-row h-min  lg:gap-16 flex-wrap justify-center items-center">
                {Images.map(item => (
                    <img
                        key={item}
                        className=""
                        src={item}
                        alt={Title}
                    />
                ))}
            </div>
            {Validation && (
                <div className="flex flex-row lg:gap-8">
                    <Link>
                        <img alt="RuleBook" src={RuleBook}></img>
                    </Link>

                    <Link to="/normalregistration">
                        <img alt="Register" src={Register}></img>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default EventsCard;
