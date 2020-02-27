import React, {Component} from 'react';
import './App.css';
import Image from './Components/Image';

class App extends Component{
  render(){
    return(
      <div>
        <Image url={'https://cdn.clipart.email/c7eafbbdb19600e9496bd00d1d957dc9_28-collection-of-jordan-logo-coloring-pages-high-quality-free-_1000-1000.jpeg'}/>
      </div>
    )
  }
}

export default App;
