import {useEffect} from 'react';
import { Navbar } from './shared/Navbar';
import { HomePage } from './pages/homePage/HomePage';


function App() {
  //useeffect for animation
   useEffect(()=>{
    const animation = ()=>{
      var leftAnimate = document.querySelectorAll('.animate-left');
      var rightAnimate = document.querySelectorAll('.animate-right');
      var downAnimate = document.querySelectorAll('.animate-down');
      var upAnimate = document.querySelectorAll('.animate-up');

      var windowHeight = window.innerHeight;
      rightAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      leftAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationLeft')
        }

      })
      upAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationUp')
        }

      })
      downAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationDown')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
