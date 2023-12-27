import NormalButton from "../NormalButton";
import InputBox from "./InputBox";

const NormalForm = () => {
    return ( <>
        <form className="normal-form w-5/6 mt-12 mx-auto lg:w-[47.875vw] border border-solid border-[#45C7FF]">
            <h1 className=" mt-[55px] mb-6 text-center font-grobold text-[#57E8E8] text-3xl tracking-wider lg:text-[40px] leading-none">Pre Register Here</h1>
            <div className="flex mb-12 justify-center flex-col gap-[35px]">
                <InputBox text="Name"/>
                <InputBox text="Mobile No."/>
                <InputBox text="Email"/>
                <InputBox text="University/Institution/Academy"/>
                <InputBox text="Referral Code (optional)"/>
            </div>
            <NormalButton text={"Next"}/>
        </form>
    </> );
}
 
export default NormalForm;