import 'bootstrap-icons/font/bootstrap-icons.css';
import porfolioImg from '../images/portfolio.avif';
import logo from '../images/logo.png';
import zamairImg from '../images/zamair.avif';
import rehanImg from '../images/rehan.avif';
import asjidImg from '../images/asjid.avif';
import busnissImg1 from '../images/buisnessimg1.avif';
import busnissImg2 from '../images/buisnessimg2.avif';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarsBackground from '../StarsDesign';



function Home() {

    // Data of the cards
    const cardsData = [
        {
            icon: <i className="bi bi-search"></i>,
            title: "REQUIREMENT GATHERING",
            description: "Unique and tailored designs that reflect your brand’s personality and values.",
            moreInfo: "Our custom design service ensures that your Shopify store stands out with a unique, tailored design that perfectly reflects your brand’s personality and values. We work closely with you to understand your vision and translate it into a visually stunning and cohesive design. From color schemes to typography, every element is meticulously crafted to create a seamless and engaging user experience. Our goal is to deliver a design that not only looks great but also enhances your brand identity and helps you connect with your target audience."
        },
        {
            icon: <i className="bi bi-phone"></i>,
            title: "Design & Prototyping",
            description: "Ensuring your store looks stunning and functions perfectly on all devices.",
            moreInfo: "In today’s multi-device world, having a responsive layout is crucial. Our responsive design ensures that your Shopify store looks stunning and functions perfectly on all devices, whether it’s a desktop, tablet, or smartphone. We use the latest techniques to create fluid grids and flexible images that automatically adjust to different screen sizes. This means your customers will enjoy a consistent and optimized shopping experience no matter how they access your site, leading to higher engagement and conversion rates."
        },
        {
            icon: <i className="bi bi-file-earmark-code"></i>,
            title: "Development",
            description: "Linking your shop to social media sites to boost your digital visibility.",
            moreInfo: "Social media integration is a powerful tool for expanding your reach and engaging with your audience. We seamlessly connect your Shopify store with major social media platforms like Facebook, Instagram, and Twitter. This allows you to easily share products, updates, and promotions, driving traffic back to your store. Additionally, integrated social media feeds keep your site content fresh and engaging. By leveraging social media, we help you build a community around your brand, increase visibility, and ultimately boost sales."
        },
        {
            icon: <i className="bi bi-laptop"></i>,
            title: "Deployment & Maintenance",
            description: "Ensuring your store looks stunning and functions perfectly on all devices.",
            moreInfo: "In today’s multi-device world, having a responsive layout is crucial. Our responsive design ensures that your Shopify store looks stunning and functions perfectly on all devices, whether it’s a desktop, tablet, or smartphone. We use the latest techniques to create fluid grids and flexible images that automatically adjust to different screen sizes. This means your customers will enjoy a consistent and optimized shopping experience no matter how they access your site, leading to higher engagement and conversion rates."
        },
        {
            icon: <i className="bi bi-meta"></i>,
            title: "Marketing & Social Media",
            description: "Linking your shop to social media sites to boost your digital visibility.",
            moreInfo: "Social media integration is a powerful tool for expanding your reach and engaging with your audience. We seamlessly connect your Shopify store with major social media platforms like Facebook, Instagram, and Twitter. This allows you to easily share products, updates, and promotions, driving traffic back to your store. Additionally, integrated social media feeds keep your site content fresh and engaging. By leveraging social media, we help you build a community around your brand, increase visibility, and ultimately boost sales."
        },
        {
            icon: <i className="bi bi-capsule"></i>,
            title: "Testing",
            description: "Unique and tailored designs that reflect your brand’s personality and values.",
            moreInfo: "Our custom design service ensures that your Shopify store stands out with a unique, tailored design that perfectly reflects your brand’s personality and values. We work closely with you to understand your vision and translate it into a visually stunning and cohesive design. From color schemes to typography, every element is meticulously crafted to create a seamless and engaging user experience. Our goal is to deliver a design that not only looks great but also enhances your brand identity and helps you connect with your target audience."
        },
    ];


    const [popupData, setPopupData] = useState(null); // State for storing card data clicked
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

    // Handle click on card
    const handleCardClick = (card) => {
        setPopupData(card);
        setIsPopupOpen(true);
    };

    // Close popup
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const [isHeaderHidden, setIsHeaderHidden] = useState(true);
    const [topSecOpacity, setTopSecOpacity] = useState(1);

    useEffect(() => {
        // design();
        AOS.init({
            duration: 500,
            offset: 30,
            easing: 'ease-in',

        });
    }, []);

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
            setTopSecOpacity(1 - scrollPosition / 500 - 0.1); // Adjust 500 to control the rate of opacity change
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isPopupOpen]);

    const [isNavOpen, setIsNavOpen] = useState('');

    const handleNavOpen = () => {
        let navBtn = document.querySelector('.nav-btn i');
        if (isNavOpen === '') {
            setIsNavOpen('flex');
            navBtn.classList.add('changing');
            setTimeout(() => {
                navBtn.classList.remove('bi-list');
                navBtn.classList.add('bi-x');
                navBtn.classList.remove('changing');
            }, 200);
        } else if (isNavOpen === 'flex') {
            setIsNavOpen('');
            navBtn.classList.add('changing');
            setTimeout(() => {
                navBtn.classList.remove('bi-x');
                navBtn.classList.add('bi-list');
                navBtn.classList.remove('changing');
            }, 200);
        }
    };

    return (
        <div>
            {/* Main Header */}
            <div>

                <header>
                    <div className="logo">
                        <div className="logo-img" ><img src={logo} alt="logo" /></div>
                        <p style={{ scale: '1.3', paddingLeft: '1.5rem' }}>Noctecx</p>
                    </div>
                    <nav>
                        <ul style={{ display: isNavOpen }} className={`${isNavOpen === 'flex' ? 'opened' : ''}`}>
                            <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
                            <li><Link to="services" smooth={true} duration={500}>SERVICES</Link></li>
                            <li><Link to="projects" smooth={true} duration={500}>WORK</Link></li>
                            <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                        </ul>
                    </nav>
                    <div className="nav-btn" onClick={handleNavOpen}>
                        <i className="bi bi-list"></i>
                    </div>
                </header>

                {/* Nav bar on scroll */}
                <div className={`nav-onscroll ${isHeaderHidden ? 'nav-hidden' : ''}`}>
                    <div className="logo">
                        <div className="logo-img"><img src={logo} alt="logo" /></div>
                        <p>Noctecx</p>
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
                    <StarsBackground />
                    {/* Top section */}
                    <div className="top-sec" style={{ opacity: topSecOpacity }}>
                        <h1 >TRANSFORM YOUR DIGITAL <br /> BUSINESS WITH Noctecx</h1>
                        <div className="for-mobile">
                            <h1>TRANSFORM YOUR DIGITAL BUSINESS WITH Noctecx</h1>
                        </div>
                        <p>Trusted Provider of Cutting Edge software Solutions</p>
                        <button>Lets Grow Together <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>

            </div>
            <main>


                {/* About section */}
                <div className="about-sec" name='about'>
                    <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> About US</div>
                    <h1 data-aos="zoom-in">WHAT DIFFERENCE?</h1>
                    <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200">Noctecx turn your visions into reality . Our expert <br />team works closely with you to deliver high-quality <br />software solutions that drive business growth. It's up <br />to you what you need . We are here to help you succeed .</h3>
                    <div className="for-mobile">
                        <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200">Noctecx turn your visions into reality . Our expert team works closely with you to deliver high-quality software solutions that drive business growth. It's up to you what you need . We are here to help you succeed .</h3>
                    </div>
                </div>

                {/* Feature section */}
                <div className="feature-sec" name='feature'>
                    <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Included Features</div>
                    <h1 data-aos="zoom-in">STAGES OF DEVELOPMENT</h1>
                    <p data-aos="zoom-in">Discover our step-by-step approach to bringing ideas to life, guiding each project from initial concept to final delivery<br />with a focus on quality, creativity, and user satisfaction at every stage.</p>
                    {/* cards */}
                    <div className="cards">
                        {cardsData.map((card, index) => {
                            return (
                                <div className="card" key={index} onClick={() => handleCardClick(card)}>
                                    <div className="top-icon">{card.icon}</div>
                                    <h2 data-aos="zoom-in" >{card.title}</h2>
                                    <p data-aos="zoom-in">{card.description}</p>
                                    <div className="bottum-icon" data-aos="zoom-in"><i className="bi bi-info-circle"></i></div>
                                </div>
                            )
                        })}
                    </div>
                    {isPopupOpen && popupData && (
                        <div onClick={closePopup} className="popup-overlay">
                            <div className="popup-content" data-aos="fade-up" data-aos-duration="300" data-aos-offset="50" onClick={(e) => e.stopPropagation()}>
                                <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Included features</div>
                                <i onClick={closePopup} className="bi bi-x"></i>
                                <h2 data-aos="zoom-in">{popupData.title}</h2>
                                <p data-aos="zoom-in">{popupData.moreInfo}</p>
                                <button onClick={closePopup}>Back to page <i className="bi bi-arrow-down"></i></button>
                            </div>
                        </div>
                    )}
                </div>

                {/* team section */}
                <div className="team-sec" name='team'>
                    <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> The Team</div>
                    <h1 data-aos="zoom-in">Family of noctecx</h1>
                    <div className="team">
                        <div className="member" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <div className="img">
                                <img src={zamairImg} alt="" />
                                <div className="icons">
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </div>
                            </div>
                            <div className="data">
                                <h3 data-aos="zoom-in">Zamair Tanveer</h3>
                                <p>Founder, CEO</p>
                            </div>
                        </div>

                        {/* <div className="member" data-aos="zoom-in" data-aos-duration="500"  data-aos-offset="100">
                            <div className="img">
                                <img src={porfolioImg} alt="" />
                                <div className="icons">
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>    
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </div>    
                            </div>
                            <div className="data">
                                <h3 data-aos="zoom-in">Jazib Umer</h3>
                                <p>General Manager</p>
                            </div>
                        </div>
                        <div className="member" data-aos="zoom-in" data-aos-duration="500"  data-aos-offset="100">
                            <div className="img">
                                <img src={rehanImg} alt="" />
                                <div className="icons">
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>    
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </div>    
                            </div>
                            <div className="data">
                                <h3 data-aos="zoom-in">Rehan Sajid</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <div className="member" data-aos="zoom-in" data-aos-duration="500"  data-aos-offset="100">
                            <div className="img">
                                <img src={asjidImg} alt="" />
                                <div className="icons">
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>    
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </div>    
                            </div>
                            <div className="data">
                                <h3 data-aos="zoom-in">Asjid Awan</h3>
                                <p>Marketing Lead</p>
                            </div>
                        </div> */}

                    </div>

                </div>


                {/* Services */}
                <div className="services-sec" name='services'>
                    <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Our Services</div>
                    <h1 data-aos="zoom-in">HOW WE CAN HELP?</h1>
                    <p data-aos="zoom-in">From the groundwork to your online commercial growth, we've got it all under control! Explore our internal services:</p>

                    <div className="services">
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">Website Development</h2>
                                <p data-aos="zoom-in">We create dynamic, responsive websites that not only look great but also provide seamless functionality across all devices. Whether you need a simple landing page or a complex web application, we ensure your site is fast, secure, and built to scale.</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">App Development</h2>
                                <p data-aos="zoom-in">Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers. Prices start from 2500€.</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">E-COMMERCE SOLUTIONS</h2>
                                <p data-aos="zoom-in">Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers. Prices start from 2500€</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">Cloud Computing</h2>
                                <p data-aos="zoom-in">"Our cloud solutions enable your business to scale securely and cost-effectively. From infrastructure setup to migration and optimization, we help you leverage the full potential of the cloud, ensuring your business remains agile and future-ready.</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">UX/UI DESIGN</h2>
                                <p data-aos="zoom-in">Our Android development services bring your mobile ideas to life with intuitive and high-performing apps. From native apps to fully integrated solutions, we design and build apps that engage users and help businesses grow.</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                        <div className="service">
                            <div className="ser-content">
                                <i className="bi bi-info-circle"></i>
                                <h2 data-aos="zoom-in">No-code Development</h2>
                                <p data-aos="zoom-in">Our Android development services bring your mobile ideas to life with intuitive and high-performing apps. From native apps to fully integrated solutions, we design and build apps that engage users and help businesses grow.</p>
                            </div>
                            <button>Ask for offer <i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </div>


                {/* projects */}
                <div className="projects-sec" name='projects'>
                    <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Portfolio</div>
                    <h1 data-aos="zoom-in">Projects</h1>
                    <p data-aos="zoom-in">"We’re proud of the projects we’ve delivered for our clients. Here are a few examples of how we’ve helped businesses <br />transform their digital presence with innovative software solutions."</p>

                    <div className="projects">
                        <div className="project">
                            <div className="left">
                                <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Portfolio</div>
                                <h2 data-aos="zoom-in">Tanvir Ahmad</h2>
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
                                <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Business</div>
                                <h2 data-aos="zoom-in">GAB MASSAGE</h2>
                                <p>We developed an augmented reality (AR) experience for a golf club website built on WordPress, enabling users to interact with 3D models of golf equipment and view detailed product specifications in real time. This immersive experience boosted engagement and led to higher conversions</p>
                                <h5>Our Services: <span>Website development</span></h5>
                                <button>Check it out!</button>
                            </div>
                            <div className="right">
                                <img src={busnissImg1} alt="Img" />
                            </div>
                        </div>

                        <div className="project">
                            <div className="left">
                                <div className="badge" data-aos="zoom-in"><i className="bi bi-info-circle"></i> Business</div>
                                <h2 data-aos="zoom-in">CPA's back office</h2>
                                <p>We handle the essential but time-consuming back-office tasks, from bookkeeping and data entry to payroll processing and document management, ensuring accuracy, compliance, and efficiency.</p>
                                <h5>Our Services: <span>Code Development</span></h5>
                                <button>Check it out!</button>
                            </div>
                            <div className="right">
                                <img src={busnissImg2} alt="Img" />
                            </div>
                        </div>

                    </div>
                    <button className='all-proj-btn'>View All Projects <i className="bi bi-arrow-right"></i></button>

                </div>

                {/* Contact */}

                <div className="contact-sec" name='contact'>
                    <div data-aos="zoom-in" className="badge"><i className="bi bi-info-circle"></i> Contact</div>
                    <h1 data-aos="zoom-in">Contact Us!!</h1>
                    <p data-aos="zoom-in">For lauching your website, we hre here for you. Discuss with us for more</p>
                    <form action="">
                        <label data-aos="zoom-in" htmlFor="name">name</label> <br />
                        <input type="text" placeholder='Muhammad Ali' /> <br />
                        <label data-aos="zoom-in" htmlFor="name">email</label> <br />
                        <input type='text' placeholder='Ali@gmail.com' /> <br />
                        <label data-aos="zoom-in" htmlFor="name">Requirment</label> <br />
                        <textarea name="" id="" placeholder='Enter your Website Requirment and we will contact less than a day'></textarea> <br />
                        <button>Submit</button>
                    </form>
                </div>



            </main>




            {/* Footer */}
            <footer>
                <div className="left">
                    <a href="#" className="logo">Noctecx</a>
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
                    <p>&copy; 2025 Copyright Noctecx</p>
                </div>
                <div className="right">
                    <div className="top">
                        <h3 data-aos="zoom-in">GET IN TOUCH</h3>
                        <p>Tell: +92 310 9853761</p>
                    </div>
                    <div className="bottom">
                        <h3 data-aos="zoom-in">FOLLOW US</h3>
                        <div className="icons">
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Home;