import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './DetailCard.scss';

const DetailCard = () =>{
    const detailRef = useRef(null)

    useEffect(()=>{
        const allDetailsChildren = [...detailRef.current.children];
        
        const revealY = (el) =>{
            gsap.from(el.children, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: 'restart none none pause'
                },
                yPercent: 100,
                duration: .6,
                stagger: .2
            })            
        }

        allDetailsChildren.forEach(child =>{
            revealY(child)
        })
    }, [])

    return(
        <div ref = {detailRef} className = "detail-card">
            <h4>
                <div>WELCOME TO MAKENA</div>
            </h4>
            <h1>
                <div>A breathtaking, one-of-a-kind</div>
                <div>place to call home</div>
            </h1>
            <div className = 'button-container'>
                <button>
                    EXPLORE
                </button>                        
            </div>

        </div>
    )
}

export default DetailCard;