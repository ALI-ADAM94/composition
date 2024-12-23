import React from 'react';
import './App.css';
import Button from './components/Button';
import Group from './components/Group';
export default function App() {
    // callBackFn  display title of button when you clicked it 
  const callBackFn=(title)=>{
  console.log(title);
     };
 return(
  <div className='App'>
      <div className='welcome'>Compostion Practice :Static component</div>
      <br/>
      <Button callBackFn={callBackFn} >Home</Button>
      <Group>
      <Button callBackFn={callBackFn}>Posts</Button>
      <Button callBackFn={callBackFn}>Books</Button>
      <Button callBackFn={callBackFn}>Contact us</Button>
      </Group>
  </div>
 );
}

