import Form from './Form';

import NormalButton from './NormalButton';

const DisplayEvents = ({ events, submit }) => {
    return (
        <Form>
            <h1 className=" w-5/6 mx-auto mt-4 font-grobold text-white text-left leading-none text-lg md:text-xl tracking-wider">
                Events Added
            </h1>
            <div className="w-5/6 mx-auto mt-2 mb-4 flex-wrap flex flex-col lg:flex-row gap-4">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className="text-box text-white py-1 px-4 md:py-2 md:px-4 rounded-[8px] border border-[#4A3FAD]"
                    >
                        {event.eventName}
                    </div>
                ))}
            </div>
            <p className="text-white px-4"><span className=" text-red-400">*</span> Add all the events you wish to register for Vivacity 2k24 before submitting. </p>
            <NormalButton text= "Submit" name="submit" handler={submit}/>
        </Form>
    );
};

export default DisplayEvents;
