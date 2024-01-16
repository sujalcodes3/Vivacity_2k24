import land from '../assets/newHomePageImages/4_bottom.png'
import logo from '../assets/newHomePageImages/logo.png'

import firstLeft from '../assets/newHomePageImages/1_left.png'
import secondLeft from '../assets/newHomePageImages/2_left.png'
import firstRight from '../assets/newHomePageImages/3_right.png'

export default function ImageLayers() {
    return (
        <div className={`w-screen flex items-center justify-center`}>
            <img className={`top-[5%]  absolute`} src = {firstLeft}/>  
            <img className={`top-1/4  absolute`} src = {secondLeft}/> 
            <img className={`top-1/4 absolute`} src = {firstRight}/> 
            <img className={`top-[70%] absolute`} src = {land}/> 

            <img src = {logo}/>
        </div>
    )
}
