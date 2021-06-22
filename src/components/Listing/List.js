import React from "react";
import PropTypes from "prop-types";
import formData from "../../utils/dataUtil";
import Loading from "../Loader";
import person from "../../assets/images/person.svg";

import "./List.scss";

function List(props) {
  const { data, category,handleTitleClick } = props;
  const { list } = formData(data, category);

  const toggleClass = (e) => {
    e.currentTarget.parentNode.nextElementSibling.classList.toggle("toggle");

  };

  return (
    <div className="list">
      {list.length>0 &&
        list.map((parent,index) => {
            const sectionClass = parent.children && parent.children.length >0 ? "showArrow" : "hideArrow";
          return (
            <div key={parent.id} className="item">
              <section className={sectionClass}>
                <button type="submit" onClick={toggleClass} className="dropdown" disabled={!parent.children.length }>&#9660;</button>
                <img
                  src={person}
                  className="mtr20"
                  height={20}
                  width={20}
                  alt="person"
                />
                <div onClick={handleTitleClick.bind(this,parent)}>{`${index+1}.  ${parent.title} `}</div>
              </section>
              {parent.children.length >0 && (
                <ol>
                  <li />
                  {parent.children.map((child,i) => {
                    return (
                      <li key={child.id}>
                        <span />
                        <img src={person} height={20} width={20} alt="person" />
                        <div className="mlr20">{`${String.fromCharCode(97 + i)}. ${child.title}`} </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          );
        })}
      {!data.length && <Loading />}
    </div>
  );
}
List.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string,
  handleTitleClick:PropTypes.func
};

List.defaultProps = {
  data: [],
  category:"",
  handleTitleClick:()=>{}
};

export default List;
