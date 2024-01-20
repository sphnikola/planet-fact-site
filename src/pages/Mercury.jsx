import { useState } from "react";
import data from "../data/data.json";
import mercury_img from "../assets/planet-mercury.svg";
import mercury_internal_img from "../assets/planet-mercury-internal.svg";
import mercury_geology_img from "../assets/geology-mercury.png";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Mercury() {
  const [answer, setAnswer] = useState(<p>{data[0].overview.content}</p>);
  const [source, setSource] = useState(data[0].overview.source);
  const [image, setImage] = useState(mercury_img);
  const [addInternal, setAddInternal] = useState(false);

  // import and set the images here
  const handleClick = (e) => {
    if (e.target.innerText === "overview") {
      setAnswer(<p>{data[0].overview.content}</p>);
      setSource(data[0].overview.source);
      setImage(mercury_img);
      setAddInternal(false);
    } else if (e.target.innerText === "structure") {
      setAnswer(<p>{data[0].structure.content}</p>);
      setSource(data[0].structure.source);
      setImage(mercury_internal_img);
      setAddInternal(false);
    } else if (e.target.innerText === "geology") {
      setAnswer(<p>{data[0].geology.content}</p>);
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
      <Footer />
    </>
  );
}
