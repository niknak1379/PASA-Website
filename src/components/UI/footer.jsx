import instagramLogo from '../../assets/Icons/instagramIcon.svg';
import facebookLogo from '../../assets/Icons/facebookIcon.svg';
import tiktokLogo from '../../assets/Icons/tiktokIcon.svg';
import pasaLogo from '../../assets/PASA_logo.webp';
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer() {
    return(
        <footer className='pt-20 px-6 flex  flex-col sm:flex-row items-center w-full max-w-screen-lg'>
            <Link to='/' className='flex justify-center items-center w-[200px] py-8 shrink'>
                <img className='rounded-full w-full footerLogo' src={pasaLogo} alt="PASA logo"/>
            </Link>
            
            <section className='footerLinks flex flex-col flex-wrap gap-4 items-center sm:items-end justify-between w-full py-8'>
                <h4 className='flex-grow text-center'> Persian American Student Association @ UC San Diego</h4>
                <nav className='webLinks'>
                    <ul className='flex flex-row flex-wrap justify-center'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to='/terms'>
                                Terms of Serivce
                            </Link>
                        </li>

                        <li>
                            <Link to='/privacy'>
                                Privacy Policy
                            </Link>
                        </li>
                    
                    </ul>
                </nav>
                <ul className="headerSocialIconsList flex flex-row items-center">
                    <li>
                        
                        <a href='https://www.instagram.com/pasa.ucsd/' target='_blank'>
                            <img src={instagramLogo} alt="instagram logo"/>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.tiktok.com/@pasaucsd' target='_blank'>
                            <img src={tiktokLogo} alt="tiktok logo"/>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.facebook.com/PASA.UCSANDIEGO' target='_blank'>
                            <img src={facebookLogo} alt="facebook logo"/>
                        </a>
                    </li>
                </ul>
                <small className='flex-grow sm:ml-auto basis-0 text-right'>&copy; Copyright 2024, PASA @ UCSD</small>
            </section>
            
        </footer>
    );
}