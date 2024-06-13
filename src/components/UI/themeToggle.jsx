import './themeToggle.css'
import { useEffect, useRef } from 'react';
export default function ThemeToggleButton(){
    let toggleRef = useRef(null);
    useEffect(()=> {

        let theme = localStorage.getItem('theme');
        if(theme === null) {
            console.log('setting theme to nul')
            localStorage.setItem('theme', 'light')
        }

        else{
            if (localStorage.getItem('theme') === 'dark') {
                
                document.body.classList.add('dark');
                toggleRef.current.classList.remove('light-theme');
                toggleRef.current.classList.add('dark-theme');
            }
        }
        return () => {

        }
    },[])
    function toggleTheme(event){

        console.log('getting local stoarge', localStorage.getItem('theme'))
        if (localStorage.getItem('theme') === 'light'){
            localStorage.setItem('theme', 'dark');
            console.log('changing to dark')
            

            toggleRef.current.classList.remove('light-theme');
            toggleRef.current.classList.add('dark-theme');
            document.body.classList.add('dark');
        }
        else{
            localStorage.setItem('theme', 'light');
            console.log('changing to light')
            
            toggleRef.current.classList.remove('dark-theme');
            toggleRef.current.classList.add('light-theme');
            document.body.classList.remove('dark');
        }
        //document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
        
    }
    return(
        
        <button className='themeToggle light-theme' id='theme-toggle' aria-label='Toggle light and dark theme' ref={toggleRef} onClick={toggleTheme}>
            <svg width="472.39" height="472.39" viewBox="0 0 472.39 472.39">
                <g className="toggle-sun">
                    <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
                </g>
                <g className="toggle-circle">
                    <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
                </g>
            </svg>
        </button>
        
    );
}