import { FooterBox } from "./FooterBox";

export function Footer() {
  return (
    <>
      <footer className="px-4 md:px-7 lg:max-w-6xl lg:mx-auto mt-10">
        <section className=" text-white flex flex-col gap-y-3 md:grid md:grid-cols-12 md:gap-x-1 lg:gap-x-8">
          <div className="md:col-start-1 md:col-end-4">
            {/* <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div> */}
            <FooterBox />
          </div>
          <div className="md:col-start-4 md:col-end-7">
            {/* <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div> */}
            <FooterBox />
          </div>
          <div className="md:col-start-7 md:col-end-10">
            {/* <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className="text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div> */}
            <FooterBox />
          </div>
          <div className="md:col-start-10 md:col-end-13">
            {/* <div className="py-3 px-5 border-[1px] border-dotted flex justify-between items-center md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4">
              <h3 className=" text-xs">Rotation time</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl">53.6 days</p>
            </div> */}
            <FooterBox />
          </div>
        </section>
      </footer>
    </>
  );
}
