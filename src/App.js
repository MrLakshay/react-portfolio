import React from 'react';
import { FaGithub, FaLinkedin, FaCode ,FaChevronLeft,FaChevronRight,FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useRef ,useState} from 'react';
// import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import newsapp from './assets/news-app.jpeg'
import meme from './assets/meme-share.gif'
import insta from './assets/instaclone.jpeg'
import bmi from './assets/bmi.jpeg'
import flash from './assets/flash chat.gif'
import ecom from './assets/ecommerce.png'

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const styles={
    footer:{
      
    }
  }
  const projects = [
    {
      title: 'Ecommerce App',
      image: ecom,
      link: 'https://github.com/MrLakshay/shopping-react-native',
      tech:' React Native'
    },
    {
      title: 'Blog Platform',
      image: 'https://images.icon-icons.com/1945/PNG/512/iconfinder-blog-4661578_122455.png',
      link: 'https://github.com/MrLakshay/Blog-app',
      tech:' React | NodeJS | Express'
    },
    {
      title: 'Vehicle Security',
      image: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/2022/01/16x9/MA0322_T3_04.61f18b97789d9.png?auto=format,compress&fit=max&q=45&w=640&width=640',
      link: '#',
      tech: 'Flutter'
    },
    {
      title: 'Calculator-Kotlin',
      image: 'https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png',
      link: 'https://github.com/MrLakshay/Calculator-Kotlin',
      tech: 'Kotlin'
    },
    {
      title: 'Instagram Clone',
      image: insta,
      link: 'https://github.com/MrLakshay/instagram',
      tech: 'Flutter'
    },
    {
      title: 'Meme Share',
      image: meme,
      link: 'https://github.com/MrLakshay/Meme_Share',
      tech:' Kotlin'
    },
    {
      title: 'Flash_chat',
      image: flash,
      link: 'https://github.com/MrLakshay/flash_chat',
      tech:' Flutter'
    }, {
      title: 'News App',
      image: newsapp,
      link: 'https://github.com/MrLakshay/flash_chat',
      tech:' Flutter'
    },{
      title: 'BMI',
      image: bmi,
      link: '',
      tech:' Flutter'
    },
    
  ];
  const skills = [
    { name: 'C++', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'React Native', image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
    { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Node.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'Kotlin', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },{ name: 'GitHub', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
    { name: 'Flutter', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
    { name: 'Postman', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s' },
    { name: 'Android Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png' },
    { name: 'VS Code', image: 'https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png' },
  ];

  const skillRef = useRef(null);
  const [skillHover, setSkillHover] = useState(false);

  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const scroll = (direction,referece) => {
    referece.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth'
    });
  }
    
  
  // const validateEmail = (email) =>
  //   /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("In submit")
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError('All fields are required.');
      console.log("Some error")
      return;
    }

    // if (!validateEmail(email)) {
    //   console.log("Some eroor 2")
    //   setError('Invalid email format.');
    //   return;
    // }
    console.log(email)
    emailjs
      .send(
        'service_omq2i8s',     // replace with your actual Service ID
        'template_l9nw2x4',    // replace with your actual Template ID
        {
          from_name: name,
          from_email: email,
          message: message+"  "+email,
        },
        '71NniEkEGRjYDuYfP'      // replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          setError('Something went wrong. Please try again.');
        }
      );
  };
  
    // if (scrollRef.current) {
    //   scrollRef.current.scrollBy({
    //     left: direction === 'left' ? -320 : 320,
    //     behavior: 'smooth'
    //   });
    // }if (skillRef.current) {
    //   skillRef.current.scrollBy({
    //     left: direction === 'left' ? -320 : 320,
    //     behavior: 'smooth'
    //   });
    // }
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white sticky top-0 z-50">
        <h1 className="text-xl font-bold">Lakshay Goel</h1>
        <div className="flex space-x-4">
          <a href="
          " target="_blank" className="hover:text-yellow-400">Resume</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <a href="https://github.com/MrLakshay" target="_blank" className="hover:text-yellow-400">GitHub</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://leetcode.com/u/user6021do/" target="_blank" ><SiLeetcode /></a>
          <a href="https://www.linkedin.com/in/lakshay-goel-1645b71a4/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/MrLakshay" target="_blank"><FaGithub /></a>
        </div>
      </nav>

      {/* About Me */}
      <section id="about" className="p-8 bg-white">
        <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* <img
            src="https://via.placeholder.com/250x250?text=Lakshay"
            alt="Lakshay Goel"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-500"
          /> */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              Software Engineer with hands-on experience in building scalable full-stack and cross-platform mobile applications.
              Proficient in React Native, Node.js, and MongoDB, with a solid grasp of REST APIs, UI/UX principles, and the MVC architecture.
              Developed production-ready apps during internships, delivering responsive, user-centric solutions.
            </p>
            <a
              href="https://drive.google.com/file/d/1gbh7YKj2tU3ItCPs5s-8-8VKaOuxtaXZ/view?usp=drive_link"
              target="_blank"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-8  mx-4">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div
          className="relative group"
          onMouseEnter={() => setSkillHover(true)}
          onMouseLeave={() => setSkillHover(false)}
        >
          <div
            ref={skillRef}
            className="flex space-x-6 overflow-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[120px] p-4 flex flex-col items-center bg-white rounded shadow hover:scale-105 transition-transform"
              >
                <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          {skillHover && (
            <>
              <button
                onClick={() => scroll('left', skillRef)}
                className="absolute left-0 top-0 h-full w-10 bg-white/60 hover:bg-white/80 backdrop-blur flex items-center justify-center"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll('right', skillRef)}
                className="absolute right-0 top-0 h-full w-10 bg-white/60 hover:bg-white/80 backdrop-blur flex items-center justify-center"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div
          className="relative group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="bg-white border rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-auto h-60 object-cover object-center mx-auto" />
                  <div className="p-2 text-center font-semibold bg-gray-900 text-white">{project.title}</div>
                  <div className="p-2 text-center font-semibold bg-gray-900 text-white">{project.tech}</div>
                </div>
              </a>
            ))}
          </div>
          {hovered && (
            <>
              <button
                onClick={() => scroll('left',scrollRef)}
                className="absolute left-0 top-0 h-full w-12 bg-white/60 hover:bg-white/80 backdrop-blur flex items-center justify-center"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll('right',scrollRef)}
                className="absolute right-0 top-0 h-full w-12 bg-white/60 hover:bg-white/80 backdrop-blur flex items-center justify-center"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      </section>

      <section className="rounded-xl mx-32 mb-8 p-8 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Parallel Blank Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lakshay Goel</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className='font-semibold'>Delhi, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <span className='font-semibold'>+91 8383059964</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className='font-semibold'>lakshaygoel.200@gmail.com</span>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" required         value={form.name}
        onChange={handleChange} name='name'/>
            <input 
                    value={form.email}
                    onChange={handleChange}
            type="email" placeholder="Email" className="w-full p-2 border rounded" required name='email'/>
            <textarea 
                    value={form.message}
                    onChange={handleChange}
                    name='message'
            placeholder="Message" rows="4" className="w-full p-2 border rounded" required></textarea>
            <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center p-4">
        Made by Lakshay with love 
      </footer>
    </div>
  );

}
