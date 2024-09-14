import React, { useState, useRef, useEffect } from "react";
import profilePic from "./images/pic5.jpg";
import MyComponent from "./MyComponent";
import profilePic2 from "./images/pic6.png";
import projectimg1 from "./images-project/windows.jpg";
import projectimg2 from "./images-project/MUSIC PLAYER.png";
import projectimg3 from "./images-project/CALC.png";
import "./index1.css";

const App = () => {

// SOCIAL ICONS
const [social, setsocial]=useState([
  {href:"#", name:"fab fa-linkedin"},
    {href:"#", name:"fab fa-github"}, 
    {href:"#", name:"fab fa-facebook"}, 
    {href:"#", name:"fab fa-twitter"}

])

// NAVBAR OPTIONS
  const [navLinks, setNavLinks] = useState([
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact", href: "#Contact" },
  ]);

  // contact field

  const [contact, setcontact]=useState([
    {  
      placeholder:"Name", type:"text",  value:""},
      { placeholder:"Email", type:"email",value:""},
      { placeholder:"Subject", type:"text", value:""}
]);



const handleinputfield=(index, e)=>
{
  const newcontact=[...contact];
  newcontact[index].value=e.target.value
  setcontact(newcontact);
}




  // NAVIGATE TO OPT
  const [activelink, setActivelink] = useState("Home");

  const handleClick = (val, event) => {
    event.preventDefault();

    console.log('Clicked link:', val);
    setActivelink(val.name);

    const targetSection = document.querySelector(val.href);

    console.log('Target section:', targetSection);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Section not found');
    }
  };

  const animateRefs = useRef([]);
  useEffect(() => {
    // Loop through the elements and apply the animation
    animateRefs.current.forEach((element, index) => {
      setTimeout(() => {
        if (element) {
          element.classList.add("show");
        }
      }, index * 150);
    });
  }, []);

  return (
    <>
      <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px 20px',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        MyLogo
      </div>
      <div
        style={{
          display: 'flex',
          gap: '15px',
        }}
      >
        <a
          href="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            padding: '8px 16px',
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            padding: '8px 16px',
          }}
        >
          About
        </a>
        <a
          href="/services"
          style={{
            color: '#fff',
            textDecoration: 'none',
            padding: '8px 16px',
          }}
        >
          Services
        </a>
        <a
          href="/contact"
          style={{
            color: '#fff',
            textDecoration: 'none',
            padding: '8px 16px',
          }}
        >
          Contact
        </a>
      </div>
    </nav>

      {/* CONTENT INSIDE */}
      <section className="content" id="Home">
        <div
          ref={(el) => (animateRefs.current[3] = el)}
          className="image animate">
            
          <img src={profilePic} alt="Profile" className="" />
        </div>
        <div
          ref={(el) => (animateRefs.current[1] = el)}
          className="home-content animate"
        >
          <h1>
            Hi, It's <span>ANSHULA</span>
          </h1>
          <MyComponent />
          <p>
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam, earum, veritatis corrupti dolorum aperiam neque adipisci,
            obcaecati enim eveniet temporibus suscipit! Perferendis voluptate
            tempore hic assumenda neque nam ullam repellat.
          </p>

          {/* BUTTONS */}
          <div
            ref={(el) => (animateRefs.current[2] = el)}
            className="social animate">
                {social.map((item, index)=>
                (
                    <a 
                    key={index}
                    href={item.href}
                    >
                      <i className={item.name}></i>
                    </a>

                
                ))}

            {/* <a href="#">
              <i className="fab fa-linkedin"></i>
             
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter "></i>
            </a> */}
            
          </div>
          <a href="#" className="btn">
            Hire Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="aboutme " id="About">
      <h1 className="underline-animation ">About Me</h1>
        <div className="profile2 ">
          <img src={profilePic2} alt="Profile2" />
        </div>

       
        <div className="abcont">
          <p>
            Hi, I'm ANSHUL, a passionate web developer with a keen interest in
            cybersecurity. I have experience in various technologies, including
            React, C++, and OOP principles. I'm currently studying at Raisoni
            College of Engineering (GHRCE). In addition to my technical skills, I enjoy
            exploring new technologies and contributing to open-source projects.
            My goal is to leverage my skills to build innovative solutions and
            continually improve my expertise in the field.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="Skills">
        <h1 className="underline-animation ">Skills</h1>

        <div className="blocks ">
          <div className="block ">
            <i className="fa-solid fa-globe "></i>
            <p>
              <h3>Web Development</h3>
              Experienced in building responsive websites with HTML, CSS,
              JavaScript, React, and Tailwind CSS for user-friendly interfaces.
            </p>
            <a href="#">learn more</a>
          </div>

          <div className="block ">
            <i className="fa-solid fa-key"></i>
            <p>
              <h3>Cybersecurity</h3>
              Skilled in ethical hacking and web security, identifying
              vulnerabilities, and protecting sensitive data.
            </p>
            <a href="#">learn more</a>
          </div>
          <div className="block">
            <i className="fa-solid fa-language"></i>
            <p>
              <h3>C++ Programming</h3>
              Proficient in OOP with C++, developing efficient algorithms, and
              using data structures.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="Portfolio">
        <h1 className="underline-animation">PORTFOLIO</h1>
        <div className="cards">
          <article className="card">
            <div className="pimg">
              <img src={projectimg1} alt="Windows 11 Clone" />
            </div>
            <div className="card_content">
              <span className="card_title">Windows 11 Clone</span>

              <p className="card_description">
                A replica of the Windows 11 interface, showcasing modern UI/UX
                design skills.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="pimg">
              <img src={projectimg2} alt="Music Player" />
            </div>
            <div className="card_content">
              <span className="card_title">Music Player</span>

              <p className="card_description">
                A music player app with a sleek interface, allowing for seamless
                music playback and control.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="pimg">
              <img src={projectimg3} alt="Calculator" />
            </div>
            <div className="card_content">
              <span className="card_title">Calculator</span>

              <p className="card_description">
                A functional calculator with a clean design, demonstrating basic
                arithmetic operations and user interaction.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="Contact">
        <h1 className="underline-animation">Contact Me</h1>
        <div className="form-card1">
          <div className="form-card2">
            <form className="form">
              <p className="form-heading">DETAILS</p>


              
              {contact.map((field, index)=>
              (
                <div className="form-field">
                  <input
                key={index}
                required
                className="input-field"
                placeholder={field.placeholder}
                value={field.value}
                text={field.text}
                onChange={(e)=>
                {handleinputfield(index,e)}
                }
                />
                  </div>
              ))}
            
              
            <div className="form-field">
                <textarea
                  required
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                ></textarea>
              </div>
              
              {/* <div className="form-field">
                <input
                  required
                  placeholder="Name"
                  className="input-field"
                  type="text"
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                />
              </div> */}


              <button className="sendMessage-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
