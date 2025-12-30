import "./imgslide.css";
import { useEffect, useState } from "react";

function ImageSlider() {
  const models=[
    {img:"https://m.media-amazon.com/images/I/616-Eh2FbPL._SX679_.jpg",
      name:"iPhone17 Pro Max"
    },
    {img:"https://m.media-amazon.com/images/I/618vU2qKXQL._SX679_.jpg",
      name:"iPhone17 Pro"
    },
    {img:"https://m.media-amazon.com/images/I/614MsdnfBxL._SX679_.jpg",
      name:"iPhone Air"
    },
    {img:"https://m.media-amazon.com/images/I/61FMZ9rSZUL._SX679_.jpg",
      name:"iPhone17"
    },
    {img:"https://m.media-amazon.com/images/I/61Brhn4WBIL._SX679_.jpg",
      name:"iPhone16e"
    },

    {img:"https://m.media-amazon.com/images/I/61135j8fPJL._SX679_.jpg",
      name:"iPhone16"
    }
  ];

  const [index, setIndex]=useState(0);

  const next=()=>{
     if (index<models.length-1) {
      setIndex(index+1);
    }
  }

  const prev=()=>{
    if (index>0) {
      setIndex(index-1);
    }
  }

  useEffect(()=>{
    const fromKeyboard=(e)=>{
      if (e.key==="ArrowRight") {next();}
      if (e.key==="ArrowLeft") {prev();}
    };
    window.addEventListener("keydown",fromKeyboard);
    return () =>
      window.removeEventListener("keydown",fromKeyboard);
  },[index]);

  return(
    <div className="slide">
      <button className="arrow" disabled={index===0} onClick={prev}>&lt;</button>

       <img src={models[index].img} alt={models[index].name}></img>
       <p className="model-name">{models[index].name}</p>

      <button className="arrow" disabled={index===models.length-1} onClick={next}>&gt;</button>
    </div>
  );
}
export default ImageSlider;
