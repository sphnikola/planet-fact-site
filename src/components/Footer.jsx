import { FooterBox } from "./FooterBox";

export function Footer(props) {
  return (
    <>
      <footer className="px-4 md:px-7 lg:max-w-6xl lg:mx-auto mt-10">
        <section className=" text-white flex flex-col gap-y-3 md:grid md:grid-cols-12 md:gap-x-3 lg:gap-x-8">
          <div className="md:col-start-1 md:col-end-4">
            <FooterBox time={props.time1} timeNumber={props.timeNumber1} />
          </div>
          <div className="md:col-start-4 md:col-end-7">
            <FooterBox time={props.time2} timeNumber={props.timeNumber2} />
          </div>
          <div className="md:col-start-7 md:col-end-10">
            <FooterBox time={props.time3} timeNumber={props.timeNumber3} />
          </div>
          <div className="md:col-start-10 md:col-end-13">
            <FooterBox time={props.time3} timeNumber={props.timeNumber3} />
          </div>
        </section>
      </footer>
    </>
  );
}
