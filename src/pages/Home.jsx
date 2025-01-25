import 'bootstrap-icons/font/bootstrap-icons.css';
import porfolioImg from '../images/portfolio.avif';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';


function Home() {
    

    const [isHeaderHidden, setIsHeaderHidden] = useState(true);
    const [topSecOpacity, setTopSecOpacity] = useState(1);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        // Hide header after 100px scroll
        if (scrollPosition > 100) {
          setIsHeaderHidden(false);
        } else {
          setIsHeaderHidden(true);
        }
  
        // Adjust opacity of top section based on scroll
        setTopSecOpacity(1 - scrollPosition / 500); // Adjust 500 to control the rate of opacity change
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return(
        <div>
            {/* Main Header */}
            <header>
                <div className="logo">
                <p>Logo</p>
                </div>
                <nav>
                <ul>
                    <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
                    <li><Link to="services" smooth={true} duration={500}>SERVICES</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>WORK</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
                </nav>
            </header>

            {/* Nav bar on scroll */}
            <div className={`nav-onscroll ${isHeaderHidden ? 'nav-hidden' : ''}`}>
                <div className="logo">
                <p>Logo</p>
                </div>
                <nav>
                <ul>
                    <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
                    <li><Link to="services" smooth={true} duration={500}>SERVICES</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>WORK</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
                </nav>
            </div>


            {/* Home Page */}
            <div className="home-page">
                {/* Top section */}
                <div className="top-sec" style={{ opacity: topSecOpacity }}>
                    <h1>TRANSFORM YOUR DIGITAL <br /> BUSINESS WITH LOGO</h1>
                    <p>Trusted Provider of Cutting Edge software Solutions</p>
                    <button>Lets Grow Together <i class="bi bi-arrow-right"></i></button>
                </div>
            
            <main>

           
                {/* About section */}
                <div className="about-sec" name='about'>
                    <div className="badge"><i class="bi bi-info-circle"></i> About US</div>
                    <h1>WHAT DIFFERENCE?</h1>
                    <h3>Noctecx turn your visions into reality . Our expert <br />team works closely with you to deliver high-quality <br />software solutions that drive business growth. It's up <br />to you what you need . We are here to help you succeed .</h3>
                </div>

                {/* Feature section */}
                <div className="feature-sec" name='feature'>
                    <div className="badge"><i class="bi bi-info-circle"></i> Included Features</div>
                    <h1>STAGES OF DEVELOPMENT</h1>
                    <p>Discover our step-by-step approach to bringing ideas to life, guiding each project from initial concept to final delivery<br />with a focus on quality, creativity, and user satisfaction at every stage.</p>
                    {/* cards */}
                    <div className="cards">
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-search"></i></div>
                            <h2>REQUIREMENT GATHERING</h2>
                            <p>Unique and tailored designs that reflect your brand’s personality and values.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-phone"></i></div>
                            <h2>Design & Prototyping</h2>
                            <p>Ensuring your store looks stunning and functions perfectly on all devices.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-file-earmark-code"></i></div>
                            <h2>Development</h2>
                            <p>Linking your shop to social media sites to boost your digital visibility.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-laptop"></i></div>
                            <h2>Deployment & Maintenance</h2>
                            <p>Ensuring your store looks stunning and functions perfectly on all devices.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-meta"></i></div>
                            <h2>Marketing & Social Meida</h2>
                            <p>Linking your shop to social media sites to boost your digital visibility.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                        <div className="card">
                            <div className="top-icon"><i class="bi bi-capsule"></i></div>
                            <h2>Testing</h2>
                            <p>Unique and tailored designs that reflect your brand’s personality and values.</p>
                            <div className="bottum-icon"><i class="bi bi-info-circle"></i></div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="services-sec" name='services'>
                    <div className="badge"><i class="bi bi-info-circle"></i> Our Services</div>
                    <h1>HOW CAN WE HELP?</h1>
                    <p>From the groundwork to your online commercial growth, we've got it all under control! Explore our internal services:</p>

                    <div className="services">
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>Website Development</h2>
                                <p>We create dynamic, responsive websites that not only look great but also provide seamless functionality across all devices. Whether you need a simple landing page or a complex web application, we ensure your site is fast, secure, and built to scale.</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>App Development</h2>
                                <p>Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers. Prices start from 2500€.</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>E-COMMERCE SOLUTIONS</h2>
                                <p>Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers. Prices start from 2500€</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>Cloud Computing</h2>
                                <p>"Our cloud solutions enable your business to scale securely and cost-effectively. From infrastructure setup to migration and optimization, we help you leverage the full potential of the cloud, ensuring your business remains agile and future-ready.</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>UX/UI DESIGN</h2>
                                <p>Our Android development services bring your mobile ideas to life with intuitive and high-performing apps. From native apps to fully integrated solutions, we design and build apps that engage users and help businesses grow.</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i class="bi bi-info-circle"></i>
                                <h2>No-code Development</h2>
                                <p>Our Android development services bring your mobile ideas to life with intuitive and high-performing apps. From native apps to fully integrated solutions, we design and build apps that engage users and help businesses grow.</p>
                                </div>
                            <button>Ask for offer <i class="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </div>


                {/* projects */}
                <div className="projects-sec" name='projects'>
                    <div className="badge"><i class="bi bi-info-circle"></i> Portfolio</div>
                    <h1>Projects</h1>
                    <p>"We’re proud of the projects we’ve delivered for our clients. Here are a few examples of how we’ve helped businesses <br />transform their digital presence with innovative software solutions."</p>

                    <div className="projects">
                        <div className="project">
                            <div className="left">
                                <div className="badge"><i class="bi bi-info-circle"></i> Portfolio</div>
                                <h2>Tanvir Ahmad</h2>
                                <p>A beautifully designed portfolio website built on Framer. We worked with our client to create an interactive, visually stunning website that showcases their work and makes it easy for potential clients to get in touch. The site is fully responsive, optimized, and easy to manage</p>
                                <h5>Our Services: <span>Website development</span></h5>
                                <button>Check it out!</button>
                            </div>
                            <div className="right">
                                <img src={porfolioImg} alt="Img" />
                            </div>
                        </div>

                        <div className="project">
                            <div className="left">
                                <div className="badge"><i class="bi bi-info-circle"></i> Portfolio</div>
                                <h2>Tanvir Ahmad</h2>
                                <p>A beautifully designed portfolio website built on Framer. We worked with our client to create an interactive, visually stunning website that showcases their work and makes it easy for potential clients to get in touch. The site is fully responsive, optimized, and easy to manage</p>
                                <h5>Our Services: <span>Website development</span></h5>
                                <button>Check it out!</button>
                            </div>
                            <div className="right">
                                <img src={porfolioImg} alt="Img" />
                            </div>
                        </div>

                        <div className="project">
                            <div className="left">
                                <div className="badge"><i class="bi bi-info-circle"></i> Portfolio</div>
                                <h2>Tanvir Ahmad</h2>
                                <p>A beautifully designed portfolio website built on Framer. We worked with our client to create an interactive, visually stunning website that showcases their work and makes it easy for potential clients to get in touch. The site is fully responsive, optimized, and easy to manage</p>
                                <h5>Our Services: <span>Website development</span></h5>
                                <button>Check it out!</button>
                            </div>
                            <div className="right">
                                <img src={porfolioImg} alt="Img" />
                            </div>
                        </div>
                    
                    </div>
                    <button className='all-proj-btn'>View All Projects <i class="bi bi-arrow-right"></i></button>

                </div>

                {/* Contact */}
                
                <div className="contact-sec" name='contact'>
                    <div className="badge"><i class="bi bi-info-circle"></i> Contact</div>
                    <h1>Contact Us!!</h1>
                    <p>For lauching your website, we hre here for you. Discuss with us for more</p>
                    <form action="">
                        <label htmlFor="name">name</label> <br />
                        <input type="text" placeholder='Muhammad Ali' /> <br />
                        <label htmlFor="name">email</label> <br />
                        <input type='text' placeholder='Ali@gmail.com' /> <br />
                        <label htmlFor="name">Requirment</label> <br />
                        <textarea name="" id="" placeholder='Enter your Website Requirment and we will contact less than a day'></textarea> <br />
                        <button>Submit</button>
                    </form>
                </div>



                </main>
                
            </div>


            
            {/* Footer */}
            <footer>
                <div className="left">
                    <a href="#" className="logo">LOGO</a>
                    <div className="links">
                        <ul>
                            <li><Link to="about" smooth={true} duration={500}>ABOUT-US</Link></li>
                            <li><Link to="feature" smooth={true} duration={500}>FEATURE</Link></li>
                            <li><Link to="team" smooth={true} duration={500}>TEAM</Link></li>
                            <li><Link to="services" smooth={true} duration={500}>SEVICES</Link></li>
                            <li><Link to="projects" smooth={true} duration={500}>PORTFOLIO</Link></li>
                            <li><Link to="contact" smooth={true} duration={500}>CONTACT US</Link></li>
                        </ul>
                    </div>
                    <p>&copy; 2025 Copyright LOGO</p>
                </div>
                <div className="right">
                    <div className="top">
                        <h3>GET IN TOUCH</h3>
                        <p>Tell: +92 30000076364</p>
                    </div>
                    <div className="bottom">
                        <h3>FOLLOW US</h3>
                        <div className="icons">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home;