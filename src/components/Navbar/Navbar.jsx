import React, { useRef, useEffect } from 'react';
import './Navbar.scss';
import gsap from 'gsap';

const Navbar = () =>{
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef(null);
    
    useEffect(()=>{

        const linksArray = [...linksRef.current.children];
        const allLinks = linksArray.map(child =>(
            child.firstChild
        ));

        const tl = gsap.timeline({delay: 1});
        tl
            .from(logoRef.current, {
                duration: .5,
                yPercent: 100,
                opacity: 0,
                ease: 'power3.easeOut'
            })
            .from(allLinks, {
                duration: .4,
                yPercent: 100,
                stagger: .1
            }, '-=.2')
    }, [])
    return(
        <div ref = {navRef} className = "navbar">
            <div className = "logo-container">
                <img ref = {logoRef} src = {require('../../assets/logos/logo-light.svg')} alt = "makena"/>
            </div>
            <ul ref = {linksRef} className = "nav-links">
                <li><div>About</div></li>
                <li><div>Experiences</div></li>
                <li><div>Residences</div></li>
                <li><div>Contact</div></li>
            </ul>
        </div>
    )
}

export default Navbar;