import React from "react";
import PropTypes from "prop-types";
import { getCategories } from "../../utils/dataUtil";
import "./filter.scss";

function Filter(props) {
  const { data, handleFilterChange,resetFilter } = props;
  const category = getCategories(data);
  
  return (
    <form className="filterform">
      <label htmlFor="filter">
        <select id="filter" onChange={handleFilterChange} defaultValue="" className="padding10 br5"> 
           <option value="">Please select a Category</option>
          {category &&
            category.map((cat) => {
              return <option value={cat} key={cat}>{cat}</option>;
            })}
        </select>
      </label>
      <button onClick={(e)=>{e.stopPropagation(); e.preventDefault(); resetFilter()}} type="submit" className="mtl20 br20 btn" >Reset Filters</button>
    </form>
  );
}

Filter.propTypes = {
  data: PropTypes.array,
  handleFilterChange: PropTypes.func,
  resetFilter:PropTypes.func
};
Filter.defaultProps = {
  data: [],
  handleFilterChange: () => {},
  resetFilter:() => {}
};

export default Filter;
