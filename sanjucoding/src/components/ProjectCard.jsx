import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
      <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
        <div className="h-75 w-80 px-5 py-5 border-2 border-violet-400 rounded-2xl flex flex-col justify-center items-center transition-all duration-300 ease-out hover:shadow-[0_0_60px_30px_rgba(126,34,206,0.6)] hover:translate-2 shadow-[0_0_30px_20px_rgba(0,0,0,0.75)]">
          <img className="h-40 w-80 object-cover" src={props.url} alt="" />
          <div className="h-20 w-80 mt-2 px-1 flex flex-col items-center gap-4">
            <h1 className="text-xl font-bold text-orange-400">{props.title}</h1>
            <button className="text-xl transition-all duration-300 ease-out active:scale-95 hover:bg-orange-400 font-bold px-20 py-2 bg-orange-500 rounded-2xl">
              View Project
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard
