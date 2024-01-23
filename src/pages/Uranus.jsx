import { useState } from "react";
import data from "../data/data.json";
import planet_img from "../assets/planet-uranus.svg";
import planet_internal_img from "../assets/planet-uranus-internal.svg";
import planet_geology_img from "../assets/geology-uranus.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Uranus() {
  const [answer, setAnswer] = useState(data[6].overview.content);
  const [source, setSource] = useState(data[6].overview.source);
  const [image, setImage] = useState(planet_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview".toUpperCase()) {
      setAnswer(data[6].overview.content);
      setSource(data[6].overview.source);
      setImage(planet_img);
      setAddInternal(false);
    } else if (e.target.innerText === "internal structure".toUpperCase()) {
      setAnswer(data[6].structure.content);
      setSource(data[6].structure.source);
      setImage(planet_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "surface geology".toUpperCase()) {
      setAnswer(data[6].geology.content);
      setSource(data[6].geology.source);
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
        initialName={data[6].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[6].rotation}
        time2="revolution time"
        timeNumber2={data[6].revolution}
        time3="radius"
        timeNumber3={data[6].radius}
        time4="average temp"
        timeNumber={data[6].temperature}
      />
    </>
  );
}
