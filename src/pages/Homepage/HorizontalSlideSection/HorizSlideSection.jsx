import React, { useRef, useEffect } from 'react'
import './HorizSlideSection.scss';
import HorizSlideSet from '../../../components/HorizSlideSet/HorizSlideSet';
import gsap from 'gsap';
import { BackArrow, ForwardArrow } from '../../../components/svgComponents/SvgComps';

const HorizSlideSection = () =>{

    const sectionRef = useRef(null);
    

    useEffect(()=>{
        const slideRef = sectionRef.current.children[1].children[0];

        const slideLength = [...slideRef.children].length;

        gsap.to(slideRef, {
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: sectionRef.current,
                end: `+=${slideRef.offsetWidth}`,
                scrub: true,
                snap: 1/(slideLength - 1)
            },
            xPercent: -80 * (slideLength - 1),
            ease: 'none',
        })

        gsap.from(slideRef, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
            },
            x: 200,
            duration: .6,
            opacity: 0,
            ease: 'power3.easeOut'
        })

    })

    return(
        <section ref = {sectionRef} className = 'horizontal-slide-section'>
            <div className = 'slide-header'>
                <div>

                </div>
                <h1>Makena Lifestyle</h1>
                <div className = "buttons-container">
                    <button><BackArrow/></button>
                    <button><ForwardArrow/></button>
                </div>

            </div>
            <div className = "slide-container">
                <div className = "slide">
                    <HorizSlideSet/>
                    <HorizSlideSet/>
                    <HorizSlideSet/>
                    <HorizSlideSet/>
                    <HorizSlideSet/>
                    <HorizSlideSet/>                    
                </div>

            </div>
        </section>
    )
}

export default HorizSlideSection;