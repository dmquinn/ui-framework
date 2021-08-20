import { useState } from "react";
import SocialMedia from "./components/SocialMedia";
import BioModal from "./components/BioModal";
import Sidebar from "./components/Sidebar";
import "./stylesheets/App.css";
import MainImage from "./albumImage.jpeg";
const App = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div>
      <SocialMedia />
      <Sidebar show={show} setShow={setShow} />
      <BioModal show={show} closeModal={closeModal} />
      <img className="mainImage" alt="" src={MainImage}></img>
    </div>
  );
};

export default App;
