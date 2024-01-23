import { useState } from "react";
import data from "../data/data.json";
import earth_img from "../assets/planet-earth.svg";
import earth_internal_img from "../assets/planet-earth-internal.svg";
import earth_geology_img from "../assets/geology-earth.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Earth() {
  const [answer, setAnswer] = useState(data[2].overview.content);
  const [source, setSource] = useState(data[2].overview.source);
  const [image, setImage] = useState(earth_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview".toUpperCase()) {
      setAnswer(data[2].overview.content);
      setSource(data[2].overview.source);
      setImage(earth_img);
      setAddInternal(false);
    } else if (e.target.innerText === "internal structure".toUpperCase()) {
      setAnswer(data[2].structure.content);
      setSource(data[2].structure.source);
      setImage(earth_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "surface geology".toUpperCase()) {
      setAnswer(data[2].geology.content);
      setSource(data[2].geology.source);
      //  setImage(earth_geology_img);
      setAddInternal(true);
      setImage(earth_img);
    }
  };

  return (
    <>
      <Main
        handleClick={handleClick}
        image={image}
        addInternal={addInternal}
        geology={earth_geology_img}
        initialName={data[2].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[2].rotation}
        time2="revolution time"
        timeNumber2={data[2].revolution}
        time3="radius"
        timeNumber3={data[2].radius}
        time4="average temp"
        timeNumber={data[2].temperature}
      />
    </>
  );
}
