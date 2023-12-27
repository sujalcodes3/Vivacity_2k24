import NormalButton from '../NormalButton';
import InputBox from './InputBox';

const NormalForm = () => {
    return (
        <form className="normal-form  lg:w-2/5 w-[90%] rounded-md mx-auto border border-solid border-[#45C7FF]">
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
            <NormalButton text={'Next'} />
        </form>
    );
};

export default NormalForm;
