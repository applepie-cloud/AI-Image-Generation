import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20'>
            <img src={assets.logo} alt="logo" width={150} />
            <p> Connect with me </p>
            <div className='flex gap-6 '>
                <img className="hover:scale-[1.08] transition-all duration-500" src={assets.github_icon} alt="github_icon icon" width={35} onClick={() =>{
                    navigate("https://github.com/applepie-cloud")
                }}/>
                <img className="hover:scale-[1.08] transition-all duration-500" src={assets.threads_icon} alt="twitter icon" width={35} onClick={() => { navigate("/")}}/>
                <img className="hover:scale-[1.08] transition-all duration-500" src={assets.instagram_icon} alt="instagram icon" width={35} onClick={() => navigate("/")} />
                <img className="hover:scale-[1.08] transition-all duration-500" src={assets.linkedin_icon} alt="linkedin icon" width={35} onClick={() => navigate("https://www.linkedin.com/in/aditya-kandpal-3854a3331/")}/>
            </div>
        </div>
    )
}

export default Footer