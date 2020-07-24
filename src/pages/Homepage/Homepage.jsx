import React, { useRef, useEffect } from 'react';
import './Homepage.scss';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar/Navbar';
import HomeSection2 from './section2/section2';
import HomeSection3 from './section3/HomeSection3';
import HomeSection4 from './section4/HomeSection4';
import HomeSection5 from './section5/HomeSection5';
import HorizSlideSection from './HorizontalSlideSection/HorizSlideSection';

gsap.registerPlugin(ScrollTrigger)

const Homepage = () =>{
    const headerRef = useRef(null)
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const contentRef = useRef(null)
    const paraRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({delay: 1.2, defaults: {ease: 'power3.easeOut', duration: .7}})
        tl
            .from(line1Ref.current, {
                opacity: 0,
                yPercent: 100,
            })
            .from(line2Ref.current, {
                opacity: 0,
                yPercent: 100
            }, '-=.5')
            .from(paraRef.current, {
                opacity: 0,
                yPercent: 100
            }, '-=.5')
        
            gsap.to(contentRef.current, {
                yPercent: -40,
                scrollTrigger: {
                    trigger: headerRef.current,
                    scrub: 1,
                    start: 'top top'
                }
            })
    }, [])

    return(
        <div className = "homepage">
            <Navbar/>
            {/* HEADER */}
            <div ref = {headerRef} className = "header">
                <div className = "darkener"/>
                <div className = 'video-container'>
                    <video playsInline preload = {false} id = "home-head-video" poster = {require('../../assets/images/homeheaderBg.png')} autoPlay muted loop>
                        <source src = {require('../../assets/videos/Makena-HeroV5.mp4')} type = "video/mp4"/>
                    </video>                    
                </div>

                <div ref = {contentRef} className = "content">
                    <h1>
                        <div className="line line1">
                            <div ref = {line1Ref} className = "line-inner">
                                Uniquely Peaceful,
                            </div>
                        </div>
                        <div className="line line2">
                            <div ref = {line2Ref} className = "line-inner">
                                Beautifully Restful.
                            </div>
                            
                        </div>
                    </h1>
                    <div>
                        <p ref = {paraRef} className = "para-inner">
                            A Discovery Land Company Community
                        </p>
                    </div> 
                </div>
            </div>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
            <HomeSection5/>
            <HorizSlideSection/>
        </div>

    )
}

export default Homepage;