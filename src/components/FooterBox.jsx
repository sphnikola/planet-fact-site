export function FooterBox(props) {
  return (
    <>
      <div
        className="py-3 px-5 border-[0.5px] border-solid border-[rgb(55,55,78)] 
       flex justify-between items-center
        md:flex-col md:items-start md:gap-y-3 lg:gap-y-10 lg:p-4"
      >
        <h3
          className="text-[0.5rem] leading-[16px] tracking-[0.046rem] text-[hsl(240,6%,54%)] 
        uppercase lg:text-[0.7rem] lg:leading-[25px] lg:tracking-[0.07rem]"
        >
          {props.time}
        </h3>
        <p
          className="text-[1.25rem] leading-[100%] -tracking-[0.047rem] text-[hsl(0,0%,100%)]
         md:text-[1.5rem] md:tracking-[-0.056rem] lg:text-[2.5rem] lg:-tracking-[1.5px]  "
        >
          {props.timeNumber}
        </p>
      </div>
    </>
  );
}
