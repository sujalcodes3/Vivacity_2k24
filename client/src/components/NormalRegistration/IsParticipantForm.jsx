import Form from "./Form";
import NormalButton from "./NormalButton";
import RadioGroup from "./RadioGroup";

const IsParticipantForm = ({submit,change}) => {
    return ( 
        <Form submit={submit}>
            <div className=" w-5/6 mx-auto mt-6">
                <RadioGroup name="participant" 
                change={change}
                options={["Yes","No"]}
                heading="Are you a participant?"
                />
                <div className="flex justify-end w-full">
                    <NormalButton text="Next"/>
                </div>   
            </div>
        </Form>
     );
}
 
export default IsParticipantForm;