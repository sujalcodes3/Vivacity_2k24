import { useRef, useState } from 'react';
import Form from './Form';
import InputBox from './InputBox';
import InputSelect from './InputSelect';
import NormalButton from './NormalButton';
import RadioGroup from './RadioGroup';

const EventsForm = ({ change, add, event, isReset, reset }) => {
    const [selectedCategory, setSelectedCategory] = useState('Drama Events');
    const categoryOptions = {
        'Drama Events': ['Paddhati', 'Rangshala', 'Mukhauta'],
        'Art Events': [
            'Hue-niverse',
            'Contrasto',
            'Eclectic',
            'Tattoo Tales',
            'Splash',
        ],
        'Music Events': [
            'Bandish',
            'Malhaar',
            'Battle of Bands',
            'Aaroh',
            'Gully War',
        ],
        'Quizzing Events': ['Bamboozled', 'Movie Auction'],
        'Dance Events': [
            'Razzamatazz',
            "Let's Tangle",
            'Mudra',
            'Pump It Up',
            'Street Dance',
        ],
        'Nukkad Events': ['Hunkaar'],
        'Speaking Arts': [
            'Open Discussion',
            'Dare to Spell',
            'Potpourii',
            'Duologue',
            'Spotlight',
            'Family Feud',
        ],
        'Photography & Videography Events': [
            'Kalakriti',
            'Pixels (Photography Contest)',
            'Perspective (Workshop)',
            'Film Making Competition',
            'Photo Booth',
            'Image Hunt',
        ],
        'Fashion Events': ['Vogue'],
    };
    const captEvents = [
        'Mukhauta',
        'Rangshala',
        'Battle of Bands',
        'Movie Auction',
        'Vogue',
        'Street Dance',
        'Razzamatazz',
    ];

    const spotEvents = [
        'Hue-niverse',
        'Contrasto',
        'Eclectic',
        'Tattoo Tales',
        'Splash',
        'Duologue',
        'Dare to Spell',
        'Potpourii',
        'Family Feud',
        'Bamboozled',
        'Movie Auction',
        'Kalakriti',
        'Perspective (Workshop)',
        'Photo Booth',
    ];
    const [options, setOptions] = useState(categoryOptions);
    const [spotReg, setspotReg] = useState(false);
    const eventNameRef = useRef();
    const teamDetailsRef = useRef();

    const handleCategorySelected = e => {
        change(e);
        if (e.target.value) {
            setSelectedCategory(e.target.value);
            eventNameRef.current.classList.remove('hidden');
        } else {
            eventNameRef.current.classList.add('hidden');
        }
    };

    const handleEventNameSelected = e => {
        change(e);
        if (e.target.value) {
            console.log(e.target.value);

            teamDetailsRef.current.classList.remove('hidden');
            teamDetailsRef.current.classList.add('flex');
        } else {
            teamDetailsRef.current.classList.remove('flex');
            teamDetailsRef.current.classList.add('hidden');
        }
        if (spotEvents.includes(e.target.value)) {
            setspotReg(true);
        } else {
            setspotReg(false);
        }
    };

    return (
        <Form>
            <h1 className=" my-8 text-center font-grobold text-[#57E8E8] text-2xl tracking-wider leading-none md:text-4xl">
                Register for an Event
            </h1>
            <div className="flex flex-col gap-6 mb-6 ">
                <InputSelect
                    name="eventCategory"
                    text="Event Category"
                    value={event.eventCategory}
                    options={[
                        'Drama Events',
                        'Art Events',
                        'Music Events',
                        'Quizzing Events',
                        'Dance Events',
                        'Nukkad Events',
                        'Speaking Arts',
                        'Photography & Videography Events',
                        'Fashion Events',
                    ]}
                    change={handleCategorySelected}
                />
            </div>
            <div className="mb-6 hidden" ref={eventNameRef}>
                <InputSelect
                    name="eventName"
                    value={event.eventName}
                    text="Event Name"
                    options={options[selectedCategory]}
                    change={handleEventNameSelected}
                />
            </div>
            <div className="mb-6 flex-col gap-6 hidden" ref={teamDetailsRef}>
                {captEvents.includes(event.eventName) && !spotReg && (
                    <div className=" w-5/6 mx-auto">
                        <RadioGroup
                            name="captain"
                            isReset={isReset}
                            setReset={reset}
                            change={change}
                            heading="Are you the team captain/coordinator ?"
                            options={['Yes', 'No']}
                        />
                    </div>
                )}
                {spotReg && (
                    <div className=" w-5/6 mx-auto font-grobold text-[#57E8E8] text-xl tracking-wider leading-none md:text-2xl">
                        Onspot Registration for this Event
                    </div>
                )}
                {!spotReg && (
                    <div className="mx-auto w-5/6 flex justify-end pt-4 gap-4">
                        <NormalButton
                            text="Add Event"
                            name="add"
                            handler={add}
                        />
                    </div>
                )}
            </div>
        </Form>
    );
};

export default EventsForm;
