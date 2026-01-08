import React from 'react'

const Skilldiv = (props) => {
  return (
    <div>
      <div className="h-full w-full flex flex-col gap-2 justify-center">
        <img className="h-15 w-15" src={props.url} alt="" />
        <h1 className="text-sm font-semibold ml-1">{props.name}</h1>
      </div>
    </div>
  );
}

export default Skilldiv
