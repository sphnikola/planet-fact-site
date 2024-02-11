export function DescriptionListItems(props) {
  return (
    <>
      <li>
        <a
          onClick={props.handleClick}
          href="#"
          className="hover:border-b-2 hover:border-b-blue-200 uppercase focus:border-b-4  border-b-blue-400"
        >
          {props.listItemName}
        </a>
      </li>
    </>
  );
}
