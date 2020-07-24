import React, { useRef, useEffect } from 'react'
import './HomeSection4.scss';
import gsap from 'gsap';

const HomeSection4 = () =>{
    const imgRef = useRef(null);

    useEffect(()=>{
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                scrub: true,
                stop: 'bottom top',
                markers: true
            },
            scale: 1.25
        })
    }, [])
    return(
        <section className = "home-section4">
            <div className = 'container'>
                <div className = "img-container">
                    <img ref = {imgRef} src = {require('../../../assets/images/MAKENA2_60063d6c0d1144faf6f17e833d89bbba.jpg')} alt = 'beach'/>
                </div>
            </div>
        </section>
    )
}

export default HomeSection4;