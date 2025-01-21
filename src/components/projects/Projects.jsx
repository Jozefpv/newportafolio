import './Projects.css';
import Reveal from '../reveal/Reveal';
import dfs from '../../assets/images/dfs.png';
import pintaloo from '../../assets/images/pintaloo.png';
import readingList from '../../assets/images/readingList.png';
import todo from '../../assets/images/todo.png';

function Projects() {

  const projects = [
    {
      title: "Pintaloo",
      description: "I developed this app using Angular and Node.js that uses artificial intelligence to generate images for children to color. The app allows users to generate creative and fun images.",
      tech: "Angular, NodeJs, Supabase",
      image: pintaloo,
      link: "https://www.pintaloo.com/"
    },
    {
      title: "ToDo List",
      description: "I developed this app using React.js, incorporating various hooks, with a focus on useContext to avoid prop drilling. Additionally, the app utilizes the browser's local storage to ensure data persistence.",
      tech: "ReactJs",
      image: todo,
      link: "https://jozefpv.github.io/To-Do-List/"
    },
    {
      title: "Death First Search",
      description: "I developed this console application using C# that solves a logic puzzle involving an agent trying to escape through doors within a network of nodes. The app implements a search algorithm to determine the best path to prevent the agent from escaping.",
      tech: "C#",
      image: dfs,
      link: "https://github.com/Jozefpv/DeathFirstSearch"
    },
    {
      title: "Reading List",
      description: "Reading List is a technical challenge from the Midudev repository for juniors, built with React.js to manage a book collection. It involves adding, removing, and organizing books, focusing on state management and component structure.",
      tech: "ReactJs",
      image: readingList,
      link: "https://github.com/Jozefpv/reading-lilst"
    }
  ];

  return (
    <div id="projectsSection" className='projectGlobalContainer'>
      <div className='projectTitle'>
        <h3>Projects<span className='experienceDot'>.</span></h3>
        <div className='line'></div>
      </div>
      <div className='projectContainerLimit'>
        {projects.map((project, index) => (
          <Reveal key={index} width="min-content">
            <a style={{textDecoration: "none"}} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='projectContainer'>
                <div className='projectContainerHeader'>
                  <img className='projectImage' src={project.image} alt={project.title} />
                </div>
                <div className='projectContainerDescription'>
                  <h3>
                    <span className='projectContainerDescriptionTitle'>{project.title}</span> - {project.tech}
                  </h3>
                  <p style={{ fontSize: "18px" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Projects;
