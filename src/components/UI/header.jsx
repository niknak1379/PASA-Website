import instagramLogo from '../../assets/Icons/instagramIcon.svg';
import tiktokLogo from '../../assets/Icons/facebookIcon.svg';
import facebookLogo from '../../assets/Icons/tiktokIcon.svg';
import sunLogo from '../../assets/Icons/sun.svg'
import pasaLogo from '../../assets/PASA_logo.webp';
import newTabLogo from '../../assets/Icons/newTab.svg'
import './header.css'
//import headerOffSet from '../../App';
import { useRef, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './themeToggle';

//const hOffset = createContext(null);



export default function Header(props) {
    let logoWrapperRef = useRef(null);
    let stickyHeaderRef = useRef(null);
    let asideNavRef = useRef(null);
    let navButtonRef = useRef(null);
    let linksArray = props.links;
    let checked = [false, false, false, false];
    let tag = '#';
    //const [hOffset, sethOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [navStatus, setNav] = useState(false);
    useEffect(() => {
        let topOffset = stickyHeaderRef.current.offsetTop;
        let backdrop = document.body.querySelectorAll('footer, main');
        //sethOffset(topOffset);
        function makeNavSticky(e) {
            //console.log(window.scrollY, topOffset)
            
            if (window.scrollY >= topOffset) {
                stickyHeaderRef.current.classList.add('fixed');
            }
            else {
                stickyHeaderRef.current.classList.remove('fixed');
            }
        }
        //nvm scrapped
        /* let checked = false;
        const observer = new IntersectionObserver((entries) => {
            
            entries.forEach(entry => {
                let parentList = document.querySelector(tag.concat(entry.target.id, 'List'));
                if(entry.isIntersecting){
                    console.log('intersecting mf')
                    //console.log(entry.target.id)
                    checked = true;
                    parentList.querySelector('span').classList.add('active');
                    console.log(parentList)
                }
                if (entry.intersectionRatio > 0.5){
                    console.log(entry.intersectionRatio)
                    parentList.querySelector('span').classList.remove('active');
                    checked = false;
                }
            });
          }, {
            //root: null, // observing intersections relative to the viewport
            threshold: [0, 0.8], // trigger when 50% of the target is visible
            rootMargin: '-50px' // margin around the root
        }); */
        /* let linkIDs = linksArray.map(x => tag.concat(x))
        let elements = linkIDs.map(id => document.querySelector(id));
        elements.map(element => observer.observe(element)) */
        //console.log(elements)
        /* function activateHeaderLink(){


            outer: for (let i = 0; i < linksArray.length; i++) {

                let element = document.querySelector(`${tag.concat(linksArray[i])}`);
                let parentList = document.querySelector(tag.concat(linksArray[i], 'List'));
                if(checkVisible(element)) {
                    console.log(`${tag.concat(linksArray[i])}`);
                    for(let j = 0; j < checked.length; j++ ) {
                        console.log(j, checked[j])
                        if (checked[j]){
                            if (i - j == 1){
                                console.log('break prev?')
                                break
                            }
                            break outer;
                        }
                    }
                    //unchecked = false;
                    //checked = i;
                    parentList.querySelector('span').classList.add('active');
                    checked[i] = true;
                    
                    continue;
                }
                else{
                    console.log('setting checked to false')
                    checked[i] = false;
                    //unchecked = true;
                    parentList.querySelector('span').classList.remove('active');
                }
            } 
        } */

        /* function checkVisible(elm) {
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        } */

        function updateMobileStatus() {
            console.log(window.screen.width)
            if (window.screen.width <= 640) {
                console.log('setting mobile to true')
                setIsMobile(true);
            }
            else {
                console.log('setting mobile to false')
                setIsMobile(false);
            }
        }

        //document.addEventListener('onload', updateMobileStatus)
        //setTimeout(updateMobileStatus, 0);
        //updateMobileStatus();
        //updateMobileStatus();
        window.addEventListener('resize', updateMobileStatus);
        document.addEventListener('scroll', makeNavSticky);
        

        /* if (linksArray.length != 1) {
            !isMobile && document.addEventListener('scroll', activateHeaderLink);
        } */

        function bodyClick() {
            if(navStatus) {
                navButtonRef.current.click();
                Array.from(backdrop).map(item => {
                    item.removeEventListener('click', bodyClick)
                });
                //console.log(navStatus)
            }   
        }

        Array.from(backdrop).map(item => {
            item.addEventListener('click', bodyClick)
        });

        if(navStatus) {
            document.body.classList.add('overflow-hidden')
        }
        else{
            document.body.classList.remove('overflow-hidden')
        }

        
        

        return () => {
            document.removeEventListener('scroll', makeNavSticky);
            //document.removeEventListener('scroll', activateHeaderLink);
            window.removeEventListener('resize', updateMobileStatus);
            window.removeEventListener('onload', updateMobileStatus);
            Array.from(backdrop).map(item => (item.removeEventListener('click', bodyClick)));
            //elements.map(element => observer.unobserve(element))
        };
    }, []);
    

    function scrollAnimate(event, elementId) {
        event.preventDefault();
        let element = document.querySelector(elementId);
        //console.log(element);
        element.scrollIntoView( {behavior : 'smooth'});
    }

    function chooseNavLinks() {
        if (linksArray[0] == 'Home') {
            return(
                <Link to='/'>
                    <span>.</span>
                    Home
                </Link>
            )
        }
        else {
            return(
                linksArray.map(item => (
                    <li id={item.concat('List')}>
                        <a id={item.concat('Link')} href={tag.concat(item)} onClick={ (e) => {
                                scrollAnimate(e, tag.concat(item))}}>
            
                                <span>.</span>
                                {item.toUpperCase()}
                        </a>
                    </li>))
            );
            
        }
    }

    function toggleMobileNav(event) {
        
        let button =  navButtonRef.current;
        

        if (!navStatus) {
            setNav(true);
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
            
        } 
        else {
            asideNavRef.current.classList.add('closed');
            setTimeout(() =>{
                setNav(false);
            }, 280)
            
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    }

    
    return (
        <div id='headerWrapp' className="flex flex-col px-3 md:px-4 items-center bg-transparent w-full max-w-screen-lg">
            <div id='logoWrapper' className='flex flex-row w-full items-center justify-center' ref={logoWrapperRef}>
                <div className='filler basis-0 grow shrink flex items-center'>
                    <ThemeToggleButton/>
                </div>
                <h1 className='font-bold text-6xl mr-auto pb-2'>P.A.S.A</h1>
                {
                    
                    <ul className="headerSocialIconsList hidden sm:flex flex-row items-center ml-auto basis-0 grow shrink justify-center">
                        <li className='ml-auto '> 
                            <a href='https://www.tiktok.com/@pasaucsd' target='_blank'>
                                <img src={tiktokLogo} alt="tiktok logo"/>
                            </a>
                        </li>

                        <li>
                            <a href='https://www.instagram.com/pasa.ucsd/' target='_blank'>
                                <img src={instagramLogo} alt="instagram logo"/>
                            </a>
                        </li>

                        <li>
                            <a href='https://www.facebook.com/PASA.UCSANDIEGO' target='_blank'>
                                <img src={facebookLogo} alt="facebook logo"/>
                            </a>
                        </li>
                    </ul>
                }
                {
                    
                    <div className='sm:hidden ml-auto basis-0 grow shrink'></div>
                }
                
            </div>
            <hr className='w-full'></hr>
            <header className="flex w-full max-w-screen-lg  items-center"
                ref={stickyHeaderRef}>

                <div className="flex w-full max-w-screen-lg  items-center py-2 border-dashed relative">
                    <Link to="/" className='flex justify-center items-center pasaLogo'>
                        <img className='h-12 rounded-full' src={pasaLogo} alt="PASA logo"/>
                    </Link>

                    {
                        
                        <>
                            <nav className='hidden sm:flex justify-center items-center ml-auto'>
                                <ul className='desktopNav navList flex flex-row'> 
                                {   
                                    chooseNavLinks()
                                }
                                </ul>
                            </nav>

                            <a  target='_blank' href='https://venmo.com/u/PASA-UCSD' className= 'donateLink hover:bg-black hover:text-white text-black rounded-lg shadow-lg px-4 h-8 ml-4 hidden sm:flex flex-row items-center'>
                                Donate
                                <img alt='new tab icon' src={newTabLogo} className='h-[1em]'/>
                            </a>
                        </>
                    }
                    {
                        
                        <>
                            <a  target='_blank' href='https://venmo.com/u/PASA-UCSD' className= 'donateLink hover:bg-black hover:text-white text-black rounded-lg shadow-lg px-4 h-8 ml-auto flex flex-row items-center shrink sm:hidden'>
                                Donate
                                <img alt='new tab icon' src={newTabLogo} className='h-[1em]'/>
                            </a>

                            <button className="hamburgerButton h-[50px] w-[50px] sm:hidden" ref={navButtonRef}
                                    aria-controls="primary-navigation" aria-expanded="false" onClick={(e) => {
                                        toggleMobileNav(e);
                                        }}>
                                <svg stroke="var(--button-color)" fill="none" className="hamburger size-full" viewBox="-10 -10 120 120" width="250">
                                    <path className="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                                    </path>
                                </svg>
                            </button>

                            {
                                navStatus &&
                                <aside className='absolute rounded-lg size-fit top-20 right-0 flex flex-col py-12 px-8 gap-8'
                                    ref={asideNavRef}>
                                    <nav className='flex justify-center items-center'>
                                        <ul className='navList flex flex-col text-center'> 
                                        {   
                                            chooseNavLinks()
                                        }
                                        </ul>
                                    </nav>
                                    <ul className="headerSocialIconsList flex flex-row items-center basis-0 grow shrink justify-center">
                                        <li > 
                                            <a href='https://www.tiktok.com/@pasaucsd' target='_blank'>
                                                <img src={tiktokLogo} alt="tiktok logo"/>
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://www.instagram.com/pasa.ucsd/' target='_blank'>
                                                <img src={instagramLogo} alt="instagram logo"/>
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://www.facebook.com/PASA.UCSANDIEGO' target='_blank'>
                                                <img src={facebookLogo} alt="facebook logo"/>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                            }
                        </>
                    }
                    

                    
                </div>
               
            </header>

        </div>
    );
}