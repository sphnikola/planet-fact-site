import { useState } from "react";
import data from "../data/data.json";
import planet_img from "../assets/planet-neptune.svg";
import planet_internal_img from "../assets/planet-neptune-internal.svg";
import planet_geology_img from "../assets/geology-neptune.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Neptune() {
  const [answer, setAnswer] = useState(data[7].overview.content);
  const [source, setSource] = useState(data[7].overview.source);
  const [image, setImage] = useState(planet_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview".toUpperCase()) {
      setAnswer(data[7].overview.content);
      setSource(data[7].overview.source);
      setImage(planet_img);
      setAddInternal(false);
    } else if (e.target.innerText === "internal structure".toUpperCase()) {
      setAnswer(data[7].structure.content);
      setSource(data[7].structure.source);
      setImage(planet_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "surface geology".toUpperCase()) {
      setAnswer(data[7].geology.content);
      setSource(data[7].geology.source);
      //  setImage(planet_geology_img);
      setAddInternal(true);
      setImage(planet_img);
    }
  };

  return (
    <>
      <Main
        handleClick={handleClick}
        image={image}
        addInternal={addInternal}
        geology={planet_geology_img}
        initialName={data[7].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[7].rotation}
        time2="revolution time"
        timeNumber2={data[7].revolution}
        time3="radius"
        timeNumber3={data[7].radius}
        time4="average temp"
        timeNumber={data[7].temperature}
      />
    </>
  );
}
