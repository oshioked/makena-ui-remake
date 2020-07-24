import React, { useRef, useEffect } from 'react'
import './section2.scss';
import gsap from 'gsap';
import DetailCard from '../../../components/DetailCard/DetailCard';


const HomeSection2 = () =>{
    const detailRef = useRef(null)
    const sectionRef = useRef(null);
    const imgContainerRef = useRef(null)

    useEffect(()=>{
        const imgRef = imgContainerRef.current.firstChild;

        gsap.from(imgRef, {
            scrollTrigger: {
                trigger: imgContainerRef.current,
                toggleActions: 'restart none none pause'
            },
            duration: 1.5,
            scale: 1.4,
        })
        gsap.to(detailRef.current, {
            scrollTrigger: {
                scrub: 1,
                trigger: detailRef.current
            },
            yPercent: 4
        })
    }, [])
    return(
        <section ref = {sectionRef} className = "home-page-section2">
            
            <div className = "content">

                <div ref = {imgContainerRef} className = "image-container">
                    <img src = {require('../../../assets/images/Surfer-overlay_c04766ce9d5593d9fb5a02e1dd8ec3f6.jpg')} alt = 'surfer girl'/>
                </div>
                <div ref = {detailRef} className = "details-inner">
                    <DetailCard/>
                </div>
            </div>
        </section>
    )
}

export default HomeSection2;