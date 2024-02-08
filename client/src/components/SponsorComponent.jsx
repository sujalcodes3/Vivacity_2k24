import { Link } from "react-router-dom";

const SponsorComponent = ({text,img,link}) => {
    return ( 
        <div className="w-[40%] min-w-[300px] flex flex-col gap-[70px] items-center">
            <h1 className=" font-grobold font-medium leading-relaxed tracking-widest text-3xl lg:text-4xl mx-auto text-white">{text}</h1>
            <div className="w-full min-h-fit">
                <Link to ={link} className="w-full">
                    <img src={img} alt="sponsor logo" className="w-full lg:max-h-[250px]"/>
                </Link>            
            </div>
        </div>
     );
}
 
export default SponsorComponent;