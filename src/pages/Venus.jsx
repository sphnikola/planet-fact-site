import { useState } from "react";
import data from "../data/data.json";
import venus_img from "../assets/planet-venus.svg";
import venus_internal_img from "../assets/planet-venus-internal.svg";
import venus_geology_img from "../assets/geology-venus.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Venus() {
  const [answer, setAnswer] = useState(data[1].overview.content);
  const [source, setSource] = useState(data[1].overview.source);
  const [image, setImage] = useState(venus_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview".toUpperCase()) {
      setAnswer(data[1].overview.content);
      setSource(data[1].overview.source);
      setImage(venus_img);
      setAddInternal(false);
    } else if (e.target.innerText === "internal structure".toUpperCase()) {
      setAnswer(data[1].structure.content);
      setSource(data[1].structure.source);
      setImage(venus_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "surface geology".toUpperCase()) {
      setAnswer(data[1].geology.content);
      setSource(data[1].geology.source);
      //  setImage(venus_geology_img);
      setAddInternal(true);
      setImage(venus_img);
    }
  };

  return (
    <>
      <Main
        handleClick={handleClick}
        image={image}
        addInternal={addInternal}
        geology={venus_geology_img}
        initialName={data[1].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[1].rotation}
        time2="revolution time"
        timeNumber2={data[1].revolution}
        time3="radius"
        timeNumber3={data[1].radius}
        time4="average temp"
        timeNumber={data[1].temperature}
      />
    </>
  );
}
