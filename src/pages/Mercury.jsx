import { useState } from "react";
import data from "../data/data.json";
import mercury_img from "../assets/planet-mercury.svg";
import mercury_internal_img from "../assets/planet-mercury-internal.svg";
import mercury_geology_img from "../assets/geology-mercury.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Mercury() {
  const [answer, setAnswer] = useState(
    <p
      className=" text-xs leading-[22px]  max-w-[500px] mx-auto text-[hsl(0,0%,100%,0.75)]
  lg:text-base lg:leading-[25px]"
    >
      {data[0].overview.content}
    </p>
  );
  const [source, setSource] = useState(data[0].overview.source);
  const [image, setImage] = useState(mercury_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview") {
      setAnswer(
        <p
          className=" text-xs leading-[22px]  max-w-[500px] mx-auto text-[hsl(0,0%,100%,0.75)]
         lg:text-base lg:leading-[25px]"
        >
          {data[0].overview.content}
        </p>
      );
      setSource(data[0].overview.source);
      setImage(mercury_img);
      setAddInternal(false);
    } else if (e.target.innerText === "structure") {
      setAnswer(
        <p
          className=" text-xs leading-[22px]  max-w-[500px] mx-auto text-[hsl(0,0%,100%,0.75)]
      lg:text-base lg:leading-[25px]"
        >
          {data[0].structure.content}
        </p>
      );
      setSource(data[0].structure.source);
      setImage(mercury_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "geology") {
      setAnswer(
        <p
          className=" text-xs leading-[22px]  max-w-[500px] mx-auto text-[hsl(0,0%,100%,0.75)]
      lg:text-base lg:leading-[25px]"
        >
          {data[0].geology.content}
        </p>
      );
      setSource(data[0].geology.source);
      //  setImage(mercury_geology_img);
      setAddInternal(true);
      setImage(mercury_img);
    }
  };

  return (
    <>
      <Main
        handleClick={handleClick}
        image={image}
        addInternal={addInternal}
        geology={mercury_geology_img}
        initialName={data[0].name}
        answer={answer}
        source={source}
      />
      <Footer
        time1="rotation time"
        timeNumber1={data[0].rotation}
        time2="revolution time"
        timeNumber2={data[0].revolution}
        time3="radius"
        timeNumber3={data[0].radius}
        time4="average temp"
        timeNumber={data[0].temperature}
      />
    </>
  );
}
