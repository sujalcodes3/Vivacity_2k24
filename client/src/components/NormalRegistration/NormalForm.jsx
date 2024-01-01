import NormalButton from './NormalButton';
import Form from './Form';
import InputBox from './InputBox';

const NormalForm = ({change,submit}) => {
    return (
        <Form submit={submit}>
            <h1 className=" my-8 text-center font-grobold text-[#57E8E8] text-2xl tracking-wider leading-none md:text-4xl">
                Pre Register Here
            </h1>
            <div className="flex justify-center flex-col gap-6 md:gap-6">
                <InputBox text="Name" name="name" change={change}/>
                <InputBox text="Mobile No." name="mobile" change={change}/>
                <InputBox text="Email" name="email" change={change}/>
                <InputBox text="University/Institution/Academy" name="institute" change={change}/>
                <InputBox text="Referral Code (optional)" name="referral" change={change}/>
            </div>
            <div className='flex justify-end w-5/6 mx-auto '>
                <NormalButton text={'Next'} />
            </div>  
        </Form>     
    );
};

export default NormalForm;
