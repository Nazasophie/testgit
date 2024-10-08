import { SectionHeader } from '../../components/section-header/SectionHeader'
import './resume.css'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'

const Resume = ({ title, subtitle, note }) => {
    return (
        <section id="resume" className="resume-section bg-gradient-close">
            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <h3 className="container-title">work experience <FaBrain className="icon" /></h3>
            <div className="resume-container">
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Junior Developer & Designer</h3>
                        <p className="item-date">December 2022 - September 2023 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Dawih Solutions (Remote)</h3>
                        <p className="item-text">
                            Design, develop, and maintain fully-fledged and functioning websites 
                            and other platforms with databases, working on both front-end and 
                            back-end development processes. 
                        </p>
                        <p className="item-text">
                            I Provide professional web designs and solutions as well as
                            provided support and maintance for wordpress solutions.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Web Developer (Intern)</h3>
                        <p className="item-date">August 2019 - March 2020 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Xtech Global Services</h3>
                        <p className="item-text">
                            Assisted with coding under the direction of senior web developers, 
                            tested existing code, formatted graphics for web use, communicated 
                            with clients about the project.
                        </p>
                        <p className="item-text">
                            Responsible for troubleshooting website issues and testing website 
                            functionality as well as new technology for potential use.
                            I brainstormed novel concepts with project managers
                            and the production team.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Software Developer (Intern)</h3>
                        <p className="item-date">April 2017 - August 2018</p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Zeo Info Tech, Makurdi</h3>
                        <p className="item-text">
                            Developed basic applications using, WordPress,  HTML, CSS, PHP, JavaScript, Bootstrap, React, Laravel and codeIgniter.  Helped development, QA, and user experience teams create new products.
                            Improved software engineering processes and best practices were learned.
                        </p>
                        <p className="item-text">
                            Collaborated with engineers to find and eliminate software bugs.
                            New applications were tested for usefulness and adherence to the code plan.
                        </p>
                        <p className="item-text">
                            To keep the section operating smoothly, I handled clerical tasks for web
                            development employees.
                        </p>
                    </div>
                </div>

            </div>

            <h3 className="container-title">education history<FaGraduationCap className="icon" /></h3>
            <div className="resume-container">
                {/* the education section  */}
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Bachelor Degree</h3>
                        <p className="item-date">July 2015 - July 2019 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Yaba College of Technology</h3>
                        <p className="item-text">
                        At Yaba College of Technology, Lagos, my fashion design degree covered an extensive array of modules, 
                        including Fashion Illustration, Garment Construction, Textile Science, and Pattern Making.
                        </p>
                        <p className="item-text">
                        I also honed skills in Fashion Marketing, Sustainable Design,
                         Fashion Technology, Trend Forecasting, and the Business of Fashion, ensuring a well-rounded foundation for a career in the fashion industry
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title"> High School</h3>
                        <p className="item-date"> June 2004 - July 2010 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">West Of Mines Jos</h3>
                        <p className="item-text">
                            I obtained my high school education here. 
                            I was equipped with the requisites of a Science student, 
                            with basic knowledge in mathematics, physics, chemistry, and biology.
                        </p>
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title"> Primary Education</h3>
                        <p className="item-date"> June 1999 - July 2004 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Police Children School Jos</h3>
                        <p className="item-text">
                            I obtanined my first school leaving certificate.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}

Resume.defaultProps = {
    title: 'resume',
    subtitle: 'More of my Credentials.',
    note: 'A quick look at my education and work experience.',

}

export default Resume
