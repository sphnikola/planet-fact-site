import { useState } from "react";
import data from "../data/data.json";
import planet_img from "../assets/planet-jupiter.svg";
import planet_internal_img from "../assets/planet-jupiter-internal.svg";
import planet_geology_img from "../assets/geology-jupiter.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Jupiter() {
  const [answer, setAnswer] = useState(data[4].overview.content);
  const [source, setSource] = useState(data[4].overview.source);
  const [image, setImage] = useState(planet_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview".toUpperCase()) {
      setAnswer(data[4].overview.content);
      setSource(data[4].overview.source);
      setImage(planet_img);
      setAddInternal(false);
    } else if (e.target.innerText === "internal structure".toUpperCase()) {
      setAnswer(data[4].structure.content);
      setSource(data[4].structure.source);
      setImage(planet_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "surface geology".toUpperCase()) {
      setAnswer(data[4].geology.content);
      setSource(data[4].geology.source);
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
        initialName={data[4].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[4].rotation}
        time2="revolution time"
        timeNumber2={data[4].revolution}
        time3="radius"
        timeNumber3={data[4].radius}
        time4="average temp"
        timeNumber={data[4].temperature}
      />
    </>
  );
}
