import data from "./data/data.json";
import mercury_img from "./assets/planet-mercury.svg";
function App() {
  console.log(data[0].name);
  return (
    <>
      <main className="grid px-4 gap-y-8">
        <section className="text-white">
          <nav>
            <ul className="flex justify-between gap-x-4">
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  overview
                </a>
              </li>
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  Structure
                </a>
              </li>
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  surface
                </a>
              </li>
            </ul>
          </nav>
          <hr className=" border-dotted bg-red-500" />
        </section>
        <section className="place-self-center ">
          <img src={mercury_img} />
        </section>
        <section className="text-white text-center">
          <h2 className="mb-3">{data[0].name}</h2>
          <p>{data[0].overview.content}</p>
        </section>
      </main>
    </>
  );
}

export default App;
