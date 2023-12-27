
import NormNav from "../components/NormalRegistration/NormNav";
import NormalForm from "../components/NormalRegistration/NormalForm";

import "./normalregistration.css";

const NormalRegistration = () => {

    return (     
        <div 
        className=" w-full min-h-screen bg-cover bg-no-repeat normal-page"
        >
            <NormNav/>
            <NormalForm/>
        </div>
     );
}
 
export default NormalRegistration;