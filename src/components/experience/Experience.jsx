import React from 'react'
import './Experience.css'
import Reveal from '../reveal/Reveal'

const Experience = () => {

    const experiences = [
        {
            title: "FullStack Developer",
            company: "Be-Ambassador",
            period: "January 2024 - Present",
            location: "Canarias",
            description: "Full Stack Developer for web applications. Worked on frontend development with Angular and backend services using .NET and SQL. Also managed deployments and integrations in Azure environments.",
            techStack: ["Angular", ".Net", "SQL Server", "Azure"]
        },
        {
            title: "Desarrollador BackEnd",
            company: "Noray",
            period: "June 2023 - January 2024",
            location: "Canarias",
            description: "Design, implementation, and maintenance of server-side logic. Creation of applications using the .NET Framework, working primarily with C#. Management of SQL Server databases to ensure data integrity and availability.",
            techStack: [".NET", "SQL Server", "Azure"]
        },
        {
            title: "FrontEnd Developer",
            company: "Vending Canarias",
            period: "March 2023 - June 2023",
            location: "Canarias",
            description: "Building interactive web pages using HTML5, CSS3, and JavaScript. Designing user-centered interfaces, ensuring ease of use and navigation. Applying frameworks like Bootstrap for responsive design.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
        }
    ];



    return (
        <div id="experienceSection" className='experienceContainer'>
            <div className='experienceTitle'>
                <h3>Experience<span className='experienceDot'>.</span></h3>
                <div className='line'></div>
            </div>
            <div className='experienceListContainer'>
                {experiences.map((experience, index) => (
                    <div key={index} className='experienceCardContainer'>
                        <Reveal width="100%">
                            <div className='companyDescription'>
                                <div style={{ fontWeight: "bold" }}>{experience.company}</div>
                                <div>{experience.period}</div>
                            </div>
                        </Reveal>
                        <Reveal width="100%">
                            <div className='jobInformation'>
                                <div style={{ color: "#A6A001", fontWeight: "bold" }}>{experience.title}</div>
                                <div>{experience.location}</div>
                            </div>
                        </Reveal>
                        <Reveal width="100%">
                            <div>
                                <p style={{ fontSize: "18px" }}>
                                    {experience.description}</p>
                            </div>
                        </Reveal>
                        <Reveal width="100%">
                            <div className='techList'>
                                {experience.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech">{tech}</span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
