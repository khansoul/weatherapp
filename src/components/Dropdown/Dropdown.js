import "./Dropdown.css";
const Dropdown = (props) => {
  return (
    <div className="DropdownContainer">
      {props.searchResults.map((result, i) => (
        <div key={i} onClick={() => props.onClickHandler(result.woeid)}>
          {result.title}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
