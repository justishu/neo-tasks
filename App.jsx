import { useState } from "react";
import PlusButton from "./Plus";
import Modal from "./Modal";
import ImageSlider from "./ImgSlide";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PlusButton  onOpen={() => setShowModal(true)} />
      <ImageSlider />
      {showModal &&  (<Modal onClose={() => setShowModal(false)} />)}
    </>
  );
}

export default App;
