import React from 'react'

interface CircleProps { 
    classname: string;
    children: React.ReactNode;
}

const Circle = ({classname, children}: CircleProps) => {
  return (
    <div className={classname}>{children}</div>
  )
}

export default Circle