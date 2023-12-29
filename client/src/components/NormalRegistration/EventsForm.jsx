import { useRef, useState } from "react";
import Form from "./Form";
import InputBox from "./InputBox";
import InputSelect from "./InputSelect";
import NormalButton from "./NormalButton";
import RadioGroup from "./RadioGroup";

const EventsForm = ({change,submit}) => {

    const[isEventCatSelected,setIsEventCatSelected] = useState(false);
    const[isEventNameSelected,setIsEventNameSelected] = useState(false);
    const eventNameRef = useRef();
    const teamDetailsRef = useRef();

    const handleCategorySelected = (e) => {
        change(e)
        if (e.target.value){
            setIsEventCatSelected(true);
            eventNameRef.current.classList.remove("hidden");
        }
        else{
            setIsEventCatSelected(false);
            eventNameRef.current.classList.add("hidden");
        }
    }

    const handleEventNameSelected = (e) => {
        change(e)
        if (e.target.value){
            setIsEventNameSelected(true);
            console.log(e.target.value);
            
            teamDetailsRef.current.classList.remove("hidden");
            teamDetailsRef.current.classList.add("flex");
        }
        else{
            setIsEventNameSelected(false);
            teamDetailsRef.current.classList.remove("flex");
            teamDetailsRef.current.classList.add("hidden");
        }
    }

    return ( 
        <Form submit={submit}>
            <h1 className=" my-8 text-center font-grobold text-[#57E8E8] text-2xl tracking-wider leading-none md:text-4xl">
                Register for an Event
            </h1>
            <div className="flex flex-col gap-6 mb-6 ">
                <InputSelect 
                name="eventCategory"
                text="Event Category" 
                options={["Dance Events","Photography Events","Drama Events"]}
                change={handleCategorySelected}
                />
            </div>
            <div className="mb-6 hidden" ref={eventNameRef}>
                <InputSelect 
                name="eventName"
                text="Event Name" 
                options={["D Events","P Events","Dra Events"]}
                change={handleEventNameSelected}
                />
            </div>
            <div className="mb-6 flex-col gap-6 hidden" ref={teamDetailsRef}>
                <InputBox name="teamSize" text="Team Size" change={change}/>

                <div className=" w-5/6 mx-auto">
                    <RadioGroup name="captain" 
                    change={change}
                    heading="Are you the team captain/coordinator ?"
                    options={["Yes","No"]}/>
                </div>
                
                <InputBox name="teamName" text="Team Name" change={change}/>
                <InputBox name="teamMembers" text="Team Members (optional)" change={change}/>

                <div className="mx-auto w-5/6 flex justify-end pt-6">
                    <NormalButton text="Add Event"/>
                </div>
            </div>
        </Form>
     );
}
 
export default EventsForm;