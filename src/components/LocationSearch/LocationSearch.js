import "./LocationSearch.css";
import Dropdown from "../Dropdown/Dropdown";

const LocationSearch = (props) => {
  return (
    <div className="LocationSearchContainer">
      <input
        type="text"
        placeholder="Search for a location"
        onChange={props.onChangeHandler}
      ></input>
      {props.showDropdown && (
        <Dropdown
          searchResults={props.searchResults}
          onClickHandler={props.onClickHandler}
        />
      )}
    </div>
  );
};

export default LocationSearch;
