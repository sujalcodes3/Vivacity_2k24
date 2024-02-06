const SponsorComponent = ({text,img}) => {
    return ( 
        <div className="w-3/4 flex flex-col gap-[70px] items-center">
            <h1 className=" font-grobold font-medium leading-relaxed tracking-widest text-5xl mx-auto text-white">{text}</h1>
            <div className="w-full min-h-fit">
                <img src={img} alt="sponsor logo" className="w-full"/>
            </div>
        </div>
     );
}
 
export default SponsorComponent;