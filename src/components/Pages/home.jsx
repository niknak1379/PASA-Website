import pasaLogo from '../../assets/PASA_logo.webp';
import jarPic from '../../assets/Main/crowd.avif';
import newTabLogo from '../../assets/Icons/newTab.svg'

import Carousel from './eventsCarousel';
import BoardCarousel from './boardCarousel';
import './home.css';
import { useRef, useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='flex flex-col px-1 md:px-4 max-w-screen-lg'>
            <section id='introduction' className='flex flex-col-reverse md:flex-row border-dashed py-16 gap-16'>
                <section id='introText' className='flex flex-col gap-2 justify-center'>
                    <h1 className='font-bold  text-5xl sm:text-7xl text-center md:text-left'>Persian American Student Association</h1>
                    <h3 className='font-bold text-center md:text-left'>@UC San Diego</h3>
                    <p className='text-xl text-center md:text-left'>
                        Subscribe to our Mailing list to keep up with the club and get the latest information About
                        our events</p>
                    <button className='main subscribeButton text-lg hover:bg-black hover:text-white text-black rounded-lg shadow-lg px-4 h-8 mx-auto md:mr-auto'
                    onClick={() => {
                        alert('sorry havent dont the mailing list yet')
                    }}>
                        Subscribe
                    </button>
                </section>
                <div className='heroImg sm:mx-auto md:ml-auto my-auto flex-shrink'>
                    <img loading="eager" fetchpriority="high" src={pasaLogo} width='200' height='200'
                    className='rounded-full mx-auto size-1/2 md:size-full shadow-lg' alt='pasa logo'/>
                </div>
                
            </section>
            <section id='aboutUs' className=' px-[5%] lg:px-16 py-16'>
                <div className='border-dashed border-x-[1px] py-16 px-8 flex flex-col gap-8 lg:gap-32'>
                    <div className='aboutImgWrapper mx-auto md:mr-auto max-w-full'>
                        <img src={jarPic} className='rounded-md aboutImg' alt='picture of a jar'/>
                    </div>
                    
                    <div className='flex flex-col justify-center gap-8 md:gap-16 flex-shrink text-center'>
                        <h3 className='text-6xl'>About Us</h3>
                        <p className='text-xl font-semibold'>The Persian American Student Association (PASA) has been active in the UC San Diego
                        Campus for 5 Years, serving as a social, cultural and community hub for Persian American's across San Diego</p>
                        <p className='text-xl font-semibold'>Our mission is giving a community and bringing other white washed persians
                        closer to their cultural roots or sth like that</p>
                    </div>
                </div>
                
            </section>

            <Carousel/>
            <BoardCarousel/>

            <section id='apply' className='flex flex-col gap-24 py-32 items-center'>
                <h3 className='text-3xl'>Our People</h3>
                <h4 className='text-6xl text-center'>Apply to our Board to be involved in our community!</h4>
                <h5 className='text-2xl text-center'>Applications open at the end of winter quarter!</h5>
                <a target='_blank' href='https://www.instagram.com/pasa.ucsd/' className='outLink applyLink hover:bg-black hover:text-white text-black rounded-lg shadow-lg flex flex-row items-center text-xl'>
                    Apply Here
                    <img alt='new tab icon' src={newTabLogo} className='h-[1em]'/>
                </a>
            </section>

            
            
        </main>

    );
}