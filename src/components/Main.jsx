import { DescriptionListItems } from "./DescriptionListItems";
import { DescriptionButtons } from "./DescriptionButtons";

export function Main(props) {
  return (
    <>
      <main className="grid px-4 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:grid-rows-auto md:px-7 lg:max-w-6xl lg:mx-auto">
        <section className="text-white  md:col-start-2  lg:col-start-3 lg:row-start-2">
          <nav className="md:hidden">
            <ul className="flex justify-between gap-x-4">
              <DescriptionListItems
                handleClick={props.handleClick}
                listItemName="overview"
              />
              <DescriptionListItems
                handleClick={props.handleClick}
                listItemName="structure"
              />
              <DescriptionListItems
                handleClick={props.handleClick}
                listItemName="geology"
              />
            </ul>
          </nav>
          <hr className="md:hidden border-dotted bg-red-500" />
          <div className="hidden md:block md:space-y-4 md:mt-5 ">
            <DescriptionButtons
              handleClick={props.handleClick}
              buttonName="overview"
            />
            <DescriptionButtons
              handleClick={props.handleClick}
              buttonName="structure"
            />
            <DescriptionButtons
              handleClick={props.handleClick}
              buttonName="geology"
            />
          </div>
        </section>
        <section className="mb-20 lg:mb-0 place-self-center md:row-start-1 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 ">
          <div className="relative lg:mt-10">
            <img className="w-[173px] md:w-full" src={props.image} />{" "}
            {props.addInternal ? (
              <img
                className="absolute left-[48px] top-[150px] w-[80px] md:w-[120px]  md:top-[240px] md:left-[85px]"
                src={props.geology}
              />
            ) : null}
          </div>
        </section>
        <section className="text-white text-center  md:col-start-1 md:row-start-2 md:text-left lg:col-start-3 lg:row-start-1">
          <h2 className="mb-3">{props.initialName}</h2>
          {props.answer}
          <p className="text-white mt-8 lg:mt-16">
            source:
            <a href={props.source} className="underline">
              wikipedia
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
