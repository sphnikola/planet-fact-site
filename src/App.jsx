import { useState } from "react";
import data from "./data/data.json";
import mercury_img from "./assets/planet-mercury.svg";
function App() {
  const [answer, setAnswer] = useState(<p>{data[0].overview.content}</p>);
  const [source, setSource] = useState(data[0].overview.source);

  const handleClick = (e) => {
    if (e.target.innerText === "overview") {
      setAnswer(<p>{data[0].overview.content}</p>);
      setSource(data[0].overview.source);
    } else if (e.target.innerText === "structure") {
      setAnswer(<p>{data[0].structure.content}</p>);
      setSource(data[0].structure.source);
    } else if (e.target.innerText === "geology") {
      setAnswer(<p>{data[0].geology.content}</p>);
      setSource(data[0].geology.source);
    }
  };

  return (
    <>
      <main className="grid px-4 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:grid-rows-auto md:px-7 lg:max-w-6xl lg:mx-auto">
        <section className="text-white md:col-start-2  lg:col-start-3 lg:row-start-2">
          <nav className="md:hidden">
            <ul className="flex justify-between gap-x-4">
              <li>
                <a
                  onClick={handleClick}
                  href="#"
                  className=" focus:border-b-4 border-b-blue-400"
                >
                  overview
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#"
                  className=" focus:border-b-4 border-b-blue-400"
                >
                  structure
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#"
                  className=" focus:border-b-4 border-b-blue-400"
                >
                  geology
                </a>
              </li>
            </ul>
          </nav>
          <hr className="md:hidden border-dotted bg-red-500" />
          <div className="hidden md:block md:space-y-4 md:mt-5 ">
            <button
              onClick={handleClick}
              className="text-white border-2 border-solid w-full"
            >
              overview
            </button>
            <button
              onClick={handleClick}
              className="text-white border-2 border-solid w-full"
            >
              structure
            </button>
            <button
              onClick={handleClick}
              className="text-white border-2 border-solid w-full"
            >
              geology
            </button>
          </div>
        </section>
        <section className="place-self-center md:row-start-1 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 ">
          <img className="lg:relative lg:top-20" src={mercury_img} />
        </section>
        <section className="text-white text-center md:col-start-1 md:row-start-2 md:text-left lg:col-start-3 lg:row-start-1">
          <h2 className="mb-3">{data[0].name}</h2>
          {answer}
          <p className="text-white mt-8 lg:mt-16">
            source:
            <a href={source} className="underline">
              wikipedia
            </a>
          </p>
        </section>
      </main>
      <footer className="px-4 md:px-7 lg:max-w-6xl lg:mx-auto mt-10">
        <section className=" text-white flex flex-col gap-y-3 md:grid md:grid-cols-12 md:gap-x-1 lg:gap-x-8">
          <div className="md:col-start-1 md:col-end-4">
            <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div>
          </div>
          <div className="md:col-start-4 md:col-end-7">
            <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div>
          </div>
          <div className="md:col-start-7 md:col-end-10">
            <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div>
          </div>
          <div className="md:col-start-10 md:col-end-13">
            <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className=" text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
