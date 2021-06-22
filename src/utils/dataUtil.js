export function getCategories(data) {
  const category = [];
  data.forEach((obj) => {
    category.push(obj.category);
  });
  return [...new Set(category)];
}

function formData(data, filter = "") {
  const output = {};

  data.forEach((obj) => {
    if (!obj.title || (filter && obj.category !== filter)) {
      return;
    }

    if (obj.parent_objective_id === "") {
      output[obj.id] = obj;
      output[obj.id].children = [];
    } 
    else if (
      obj.parent_objective_id !== "" &&
      output[obj.parent_objective_id]
    ) {
      output[obj.parent_objective_id].children.push(obj);
    } 
    else if (
      obj.parent_objective_id !== "" &&
      !output[obj.parent_objective_id]
    ) {
      output[obj.parent_objective_id] = {};
      output[obj.parent_objective_id].children = [];
      output[obj.parent_objective_id].children.push(obj);
    }
  });

  const list = Object.values(output).filter((val) => {
    return val.title;
  });

  return { list };
}

export default formData;
