export function DescriptionButtons(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        className="text-white border-[1px] border-solid border-[rgb(55,55,78)] p-3 flex flex-col
         tracking-[0.12rem]  w-72 ml-auto lg:w-full lg:block"
      >
        {props.buttonName}
      </button>
    </>
  );
}
