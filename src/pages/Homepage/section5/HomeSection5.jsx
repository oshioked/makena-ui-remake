import React, { useRef, useEffect } from 'react'
import './HomeSection5.scss';
import gsap from 'gsap';

const HomeSection5 = ()=>{
    const detailParaRef = useRef(null);
    const pRef = useRef(null);
    const h1Ref = useRef(null);
    const imgRef = useRef(null);

    useEffect(()=>{
        const paraContent = [...detailParaRef.current.children].map(el => el.firstElementChild);
        
        const revealY = (el, trigEl) =>{
            gsap.from(el, {
                scrollTrigger: {
                    trigger: trigEl,
                },
                yPercent: 100,
                duration: .5,
                stagger: .3
            })            
        }
        gsap.from(imgRef.current.firstChild, {
            scale: 1.3,
            scrollTrigger: {
                trigger: imgRef.current.firstChild,
                start: 'top+=100 bottom'
            },
            duration: 1
        })
        revealY(pRef.current.children, pRef.current);
        revealY(h1Ref.current, h1Ref.current.children)
        revealY(paraContent, detailParaRef.current);

    }, []) 

    return(
        <section className = 'home-section5'>
            <div className = "inner">
                <div className = "inner-details">
                    <div className = 'title-para' ref = {pRef}><p>PACIFIC HIDEAWAY</p></div>
                    <h1 className = "title" ref = {h1Ref}><div>Aloha paradise</div></h1>
                    <div ref = {detailParaRef} className = "details-para">
                        <div className = 'para-inner'><div className = "para-inner-content">A picturesque golf and beach community nestled on </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">Maui’s southern shore, Mākena boasts breathtaking </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">ocean views, stunning mountain landscapes, and </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">immaculate crescent-shaped sandy beaches. </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">Surrounded by natural resources unlike any on earth, </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">Mākena Golf & Beach Club's signature service offers </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">spectacular amenities, world-class ocean and mountain </div></div>
                        <div className = 'para-inner'><div className = "para-inner-content">recreation, and 18-holes of championship golf.</div></div>
                    </div>
                </div>
                <div className = "inner-image">
                    <div  className = "image-container">
                        <div ref = {imgRef} className  = 'image-inner'>
                            <img src = {require('../../../assets/images/Island-portrait_d3867277feb154defec9b24a5714fadb.jpg')} alt = 'island'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection5;