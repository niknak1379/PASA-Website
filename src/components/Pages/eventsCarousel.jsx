import girlPic from '../../assets/Main/Events/table.avif';
import jarPic from '../../assets/Main/Events/jar.avif';
import hi from '../../assets/Main/Events/footbal.avif';

import './eventsCarousel.css';
import { useRef, useEffect, useState } from 'react';


export default function Carousel() {
    let img1 = useRef(null);
    let img2 = useRef(null);
    let img3 = useRef(null);
    
    let txt1 = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let topOffset = txt1.current.offsetTop;
        let headerOffSet = document.querySelector('header').offsetHeight;
        let txtOffSet = txt1.current.offsetHeight;

        

        function makePicSticky(e) {
        
            if ((window.scrollY + headerOffSet) >= topOffset 
                && (topOffset + (3 * txtOffSet - window.innerHeight)/ 3) >= (window.scrollY)) {

                img1.current.classList.remove('opacity-0');
                img2.current.classList.remove('opacity-100');
                img2.current.classList.add('opacity-0');
                img3.current.classList.add('opacity-0');
            }
            if ((window.scrollY) >= (topOffset + (3 * txtOffSet - window.innerHeight)/ 3) 
                && (topOffset + 2 * (3 * txtOffSet - window.innerHeight)/ 3) >= (window.scrollY)) {

                img1.current.classList.add('opacity-0');
                img2.current.classList.remove('opacity-0');
                img2.current.classList.add('opacity-100');
                img3.current.classList.remove('opacity-100');
            }
            if ((window.scrollY) >= (topOffset + 2 * (3 * txtOffSet - window.innerHeight)/ 3) 
                && (topOffset + 3 * (3 * txtOffSet - window.innerHeight)/ 3) >= (window.scrollY)) {

                
                img2.current.classList.remove('opacity-100');
                img2.current.classList.add('opacity-0');
                img3.current.classList.add('opacity-100');

            }
        }
        function updateMobileStatus() {
            console.log(window.screen.width)
            if (window.screen.width <= 640 || window.innerWidth <= 640) {
                console.log('setting mobile to true')
                setIsMobile(true);
            } 
            else {
                console.log('setting mobile to false')
                setIsMobile(false);
            }
        }

        
        updateMobileStatus();
        window.addEventListener('resize', updateMobileStatus);
        
        !isMobile && document.addEventListener('scroll', makePicSticky);
        

        return () => {
            document.removeEventListener('scroll', makePicSticky);
        };
    }, [isMobile]);
    return (
        <section id='events' className='py-32'>
                <h3 className='pb-32 text-center text-6xl'>
                    Our Events
                </h3>
                <div className='flex flex-col sm:flex-row flex-grow'>
                    {
                        !isMobile && 
                        <div className='imgContainer sm:w-[50%] sticky top-0 sm:h-screen'>
                            <img id='carasolImg' src={girlPic} ref={img1} className='absolute z-10' alt='a girl at a social table'/>
                            <img src={jarPic} ref={img2} className='absolute' alt='picture of a jar'/>
                            <img src={hi} ref={img3} className='absolute' alt='picture of a man playing footbal'/>
                        </div>
                    }
                    

                    <div className='explanationContainer flex flex-col w-full sm:w-1/2'>
                        <div className='h-screen sm:h-[600px] flex flex-col' ref={txt1}>
                            {
                                isMobile &&
                                <img id='carasolImg' src={girlPic} ref={img1} className='' alt='picture of a girl at a social table'/>
                            }
                            
                            <div className='flex flex-row border-solid border-[2px] py-8 sm:h-full grow'>
                            
                                <h5 className='px-8 text-xl'>
                                    01.
                                </h5>
                                <div className='explanation'>
                                    <h4 className='text-4xl'>
                                        Community Building:
                                    </h4>
                                    <p className='text-xl pt-2'>
                                       Encouraging the UCSD Persian community to connect to their cultural and communal roots by
                                       hositng cultural themed events.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className='h-screen sm:h-[600px] flex flex-col'>
                            {
                                isMobile &&
                                <img src={jarPic} ref={img2} className='' alt='picture of a jar'/>
                            }
                            
                            <div className='flex flex-row border-solid border-[2px] py-8 sm:h-full grow' >
                            
                                <h5 className='px-8 text-xl'>
                                    02.
                                </h5>
                                <div className='explanation'>
                                    <h4 className='text-4xl'>
                                        Social: 
                                    </h4>
                                    <p className='text-xl pt-2'>
                                        Fun and exciting events, exposing the community to great persian music and raghs!
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='h-screen sm:h-[600px] flex flex-col'>
                            {
                                isMobile &&
                                <img src={hi} ref={img3} className='' alt='picture of a man playing soccer'/>
                            }
                            
                            <div className='flex flex-row border-solid border-[2px] py-8 sm:h-full grow'>
                            
                                <h5 className='px-8 text-xl'>
                                    03.
                                </h5>
                                <div className='explanation'>
                                    <h4 className='text-4xl'>
                                        Outdoor and Phycisal:
                                    </h4>
                                    <p className='text-xl pt-2'>
                                        outdoor activites and gatherings, go get your toop and play some footbal! 
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
    );

}