export function DescriptionButtons(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        className="text-white border-2 border-solid w-full"
      >
        {props.buttonName}
      </button>
    </>
  );
}
