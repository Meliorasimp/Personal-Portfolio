import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center"> 
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to bg-gray-900 w-full max-w-4xl h-full md:h-3/4 mt-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 p-4 md:gap-20 md:p-10">
        <div className="w-full md:w-1/3 h-auto md:h-1/3 flex items-center justify-center">
          <img src="../images/gehleeace.jpg" alt="Profile Picture" className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-gray-200"/>
        </div>
        <div className="flex flex-col gap-6 justify-center w-full md:w-9/12 h-full text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Meinard!</h1>
          <h5 className="text-base md:text-lg w-full md:w-2/3">A Software Developer from the Philippines who has a Passion for Learning new things, Technologies and Gaming.</h5>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
            <button className="bg-green-400 pl-8 pr-8 pt-3 pb-3 rounded-lg hover:bg-green-600">Download CV</button>
            <a href="https://www.linkedin.com/in/meinard-legashki-limlengco-904157328/" className="text-white">
              <button className="bg-blue-400 pl-8 pr-8 pt-3 pb-3 rounded-lg hover:bg-blue-600">Go to my LinkedIn</button>
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-10 gap-4 text-white"> 
            <span>Follow me on:</span> 
            <div className="flex space-x-4"> 
              <a href="https://www.facebook.com/meinardlegashki.limlengco" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a> 
              <a href="https://x.com/legashki" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>  
              <a href="https://github.com/Meliorasimp" target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-gray-700'>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;

