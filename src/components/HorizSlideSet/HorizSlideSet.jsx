import React, { useRef, useEffect } from 'react'
import './HorizSlideSet.scss';
import DetailCard from '../DetailCard/DetailCard';
import gsap from 'gsap/gsap-core';

const HorizSlideSet = () =>{
    return(
        <div  className = "horiz-slide-set">
            <div className = "base-image-container">
                <img src = {require('../../assets/images/Golf-lifestyle-background_200421_155440_aa93d8ee9a3cc573b9a01b328410e8b2.jpg')} alt = 'golf'/>
            </div>  
            <div className = 'content'>
                <div className = "content-image-container">
                    <img src = {require('../../assets/images/golf-2_11014826b3e36b3697374f276a89b517.jpg')} alt = ""/>
                </div>
                <div className = "content-detail">
                    <h4>
                        <div>WELCOME TO MAKENA</div>
                    </h4>
                    <div className = 'button-container'>
                        <button>
                            EXPLORE
                        </button>                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HorizSlideSet;
