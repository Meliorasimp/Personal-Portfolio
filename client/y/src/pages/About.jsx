import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center gap-10 m-0">
      <div className="w-1/3 h-5/6 mt-10 border">
        <img src="../images/gehleereal.jpg" alt="About me Profile Picture" className="rounded-lg object-cover w-full h-full shadow-white shadow-lg" />
      </div>
      <div className="flex flex-col justify-center items-start max-w-xl">
        <h1 className="text-4xl font-bold mb-7">About Me</h1>
        <p className="text-lg mt-2 text-justify w-96">"All the Good things in Life comes at a cost"~~</p>
        <p className="w-full">I am Meinard Legashki S. Limlengco, A Passionate Aspiring Software Developer Based in the Philippines</p><br />
        <p>I have been honing my skills in using React and Tailwind css for frontend development, Node JS, Express JS and MongoDB for Backend Development for months now. I thrive on bringing innovative ideas to life through clean, efficient, and aesthetically pleasing designs</p><br />
        <p>When I'm not coding, you can find me Playing Video Games or Reading Psychology books. I believe that continuous learning and personal growth are keys to success, and I'm always on the lookout for new challenges that push my boundaries.</p><br />
        <p>I'm excited to connect with like-minded individuals and collaborate on projects that make a difference. Let's create something amazing together!</p>
        <Link to={'/projects'}>
          <button className="bg-green-400 p-3 mt-3 rounded-md hover:bg-green-600 text-white font-bold">Check out my Projects</button>
        </Link>
      </div>
    </div>

  )
}

export default About
