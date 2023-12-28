import NormalButton from '../NormalButton';
import Form from './Form';
import InputBox from './InputBox';

const NormalForm = () => {
    return (
        <Form>
            <h1 className=" my-8 text-center font-grobold text-[#57E8E8] text-2xl tracking-wider leading-none md:text-4xl">
                Pre Register Here
            </h1>
            <div className="flex justify-center flex-col gap-6 md:gap-6">
                <InputBox text="Name" />
                <InputBox text="Mobile No." />
                <InputBox text="Email" />
                <InputBox text="University/Institution/Academy" />
                <InputBox text="Referral Code (optional)" />
            </div>
            <div className='flex justify-end w-5/6 mx-auto '>
                <NormalButton text={'Next'} />
            </div>  
        </Form>     
    );
};

export default NormalForm;
