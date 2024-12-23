
import React from 'react'
export default function Group({children}) {
    const cloneElement=React.Children.map(children,(child)=>{
      return React.cloneElement(
        child,
        {
          color:'blue',
          customStyles:'group',
          callBackFn:child.props.callBackFn
      },);
    });
 

  return <div>{cloneElement}</div>;
  
}
