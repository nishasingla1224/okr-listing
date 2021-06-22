import React, { useState, useEffect } from "react";
import List from "../components/Listing/List";
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import "./App.scss";

function App() {
  const [list, setList] = useState([]);
  const [category, setFilter] = useState("");
  const [showModal, setShow] = useState(false);
  const [parent, setActiveParent] = useState("");
  useEffect(() => {
    fetch("https://okrcentral.github.io/sample-okrs/db.json")
      .then((response) => response.json())
      .then(({ data }) => {
        setList(data);
      });
  }, []);
  const resetFilter = () => {
    setFilter("");
  };

  const handleFilterChange = (event) => {
      if(!event.target.value){
        resetFilter();
      }
    setFilter(event.target.value);
  };

 
  const hideModal = () => {
    setShow(false);
  };
  const handleTitleClick = (modal) => {
    setActiveParent(modal);
    setShow(true);
  };

  return (
    <div className="App">
      <Filter
        data={list}
        handleFilterChange={handleFilterChange}
        resetFilter={resetFilter}
      />
      <List
        data={list}
        category={category}
        handleTitleClick={handleTitleClick}
      />
      {showModal && (
        <Modal show={showModal} handleClose={hideModal}>
            <table>
                <tr>
                    <td>Id</td>
                    <td>{parent.id}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{parent.category}</td>
                </tr>
                <tr>
                    <td>Metric Name</td>
                    <td>{parent.metric_name || "NA"}</td>
                </tr>
                <tr>
                    <td>Metric Start</td>
                    <td>{parent.metric_start || "NA"}</td>
                </tr>
                <tr>
                    <td>Metric End</td>
                    <td>{parent.metric_end || "NA"}</td>
                </tr>
            </table>
        </Modal>
      )}
    </div>
  );
}

export default App;
