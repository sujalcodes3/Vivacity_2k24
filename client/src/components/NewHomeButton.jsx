import { useState } from 'react';
import classes from './buttons.module.css';
import { redirect, useNavigate } from 'react-router-dom';

export default function Button({ title, onclick }) {
    const navigate = useNavigate()
    return (
        <div 
            onClick={() => 
                {
                    if(title != "Guidelines" && title != "Code of Conduct"){
                        navigate("/"+onclick)
                    } else if ( title === "Guidelines"){
                        window.open('https://d3lhw1p67h4h5r.cloudfront.net/guidelines.pdf',"_blank") 
                    }
                    else if ( title === "Code of Conduct"){
                        window.open('https://d3lhw1p67h4h5r.cloudfront.net/coc.pdf',"_blank") 
                    }
                }
            }

            className={`${classes.newhomebutton} cursor-pointer bg-no-repeat w-[11.125rem] h-[3.25rem] flex font-grobold p-2 items-center justify-center text-white ${title === 'Code of Conduct' ? "text-sm" : "text-2xl"} hover:text-navButtonYellow z-10 hover:scale-95`}
        >
            <p className="drop-shadow-[0_0_4.8px_#5C2E00]">{title}</p>
        </div>
    );
}
