import React,{useRef,useEffect,useState} from 'react'
import bg from "../../assets/Frame7.svg"
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import searchIcon from '../../assets/SearchIcon.svg'
import { Link } from 'react-router-dom';
const ZoomOutExample = () => {
    const images = [
        bg,
        bg,
        bg,
    ];
    const indicators = ()=>(<img></img>)
    const [pslide, setPsilde] = useState(1);
    const ref = useRef();
  return (
      <div>
        <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Staatliches&display=swap'); </style>
        <Zoom scale={1} indicators={false} duration='5000' >
            {images.map((each, index) => (
          <div ref={ref} key={index} style={{ width: "100%",height:'100vh',backgroundImage:`url(${each})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
            {/* <img style={{ objectFit: "cover", width: "100%",height:'100vh'}} alt="Slide Image" src={each} /> */}
            <div style={{fontWeight:'400',fontSize:'300px',color:'white',fontFamily: "'Staatliches', cursive",position:'absolute',right:'40px',bottom:'-70px'}}>SOJOU</div>
            <Link style={{position: 'absolute', top:'50%', left:'150px'}} to='/mainpage/dashboard'><img style={{height:'60px'}} src={searchIcon}></img></Link>
          </div>
      ))}
      {/*  */}
    </Zoom>
      </div>
  );
};

export default ZoomOutExample;