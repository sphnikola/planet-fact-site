export function DescriptionListItems(props) {
  return (
    <>
      <li>
        <a
          onClick={props.handleClick}
          href="#"
          className=" uppercase focus:border-b-4  border-b-blue-400"
        >
          {props.listItemName}
        </a>
      </li>
    </>
  );
}
