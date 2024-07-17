import react from 'react';
import '../index.css';
import chatApp from '../assets/chatApp.webp';
import markDown from '../assets/markDown.webp';
import pomodoroClock from '../assets/pomodoroClock.webp';
import weatherApp from '../assets/weatherApp.webp';
const ProjectsSection = () => {
    const projects=[
        {
            id:1,
            name:'Weather App',
            img:weatherApp,  
        },
        {
            id:2,
            name:'Chat Application',
            img:chatApp,
        },
        {
            id:3,
            name:'Pomodoro Clock',
            img:pomodoroClock
        },
        {
            id:4,
            name:'Markdown Previewer',
            img:markDown
        }
    ]
    return(
        <>
        <div className='min-h-screen'>
        <h1 className='text-5xl text-center font-bold font-Robo mb-56'>Projects</h1>
        <div className='lg:flex flex-row items-center  justify-evenly font-Robo'>
            {projects.map(proj => (
                <div key={proj.id} className='flex flex-col items-center m-2 '>
                    <img src={proj.img} alt={`${proj.name} logo`} className='w-40 h-60' />
                    <p className='font-medium text-1xl '>{proj.name}</p>
                </div>
            ))}
        </div>
        </div>
        </>

    );
};
export default ProjectsSection;