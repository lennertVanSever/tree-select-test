import React from "react";
import ReactDOM from "react-dom";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

const data = {
  label: "search me",
  value: "searchme",
  children: [
    {
      label: "search me too",
      value: "searchmetoo",
      children: [
        {
          label: "No one can get me",
          value: "anonymous"
        }
      ]
    }
  ]
};

const Dropdown = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = React.useState("");
  const searchPredicate = (node, searchTerm) => {
    setCurrentSearchTerm(searchTerm);
    console.log(node, searchTerm);
    return node.label.includes(searchTerm);
  };

  return (
    <>
      <DropdownTreeSelect data={data} searchPredicate={searchPredicate} />
      <p>Current search term: {currentSearchTerm}</p>
    </>
  );
};

ReactDOM.render(<Dropdown />, document.body);
