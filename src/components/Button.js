import React from 'react'

export default function Button({color,customStyles,children,callBackFn}) {
  return (
    // customStyles from another styles as you want 
    <div className={`${ customStyles ? "button "+customStyles :'button'}`} 
    style={{color:color,customStyles}}
    onClick={()=>callBackFn(children)}
    >
    {children}
    </div>
  )
}
