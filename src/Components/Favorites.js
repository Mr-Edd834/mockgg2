import react from 'react';  
import { HeartCrack } from "lucide-react";
import SplitText from "../Animations/SplitText";
import './Favorites.css';

const Favorites = () => {
  const favoritesBackgroundStyle = {
    backgroundImage: "url('https://media.istockphoto.com/id/483752419/photo/leather-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=e1xIqFFg8UHD1xdoTrb3f-tXmXaTujRpTpY2InpH4ms=')"
  };
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <>
      <div className="full-page-background" style={favoritesBackgroundStyle}></div>
     
      <div className='favorites-content'>
      <SplitText
    text="You don't have any favorites yet !"
    className="text-2xl font-semibold text-center"
    delay={100}
    duration={0.2}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}    
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="center"
    onLetterAnimationComplete={handleAnimationComplete}
  />
        <HeartCrack size={100} color="#000000" />
      </div>
    </>
  );
}

export default Favorites;