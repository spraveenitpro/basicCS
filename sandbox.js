const tree = {
  id: 1,
  name: "Rusty Corp.",
  emoji: "🐕",
  parent_id: null,
  children: [
    { id: 2, name: "Food", emoji: "🥩", parent_id: 1, children: [] },
    {
      id: 3,
      name: "Canine Therapy",
      emoji: "😌",
      parent_id: 1,
      children: [
        { id: 4, name: "Massages", emoji: "💆", parent_id: 3, children: [] },
        { id: 5, name: "Games", emoji: "🎾", parent_id: 3, children: [] },
      ],
    },
  ],
};

function add(data, obj, pid = null) {
  if (pid == obj.parent_id) {
    data.children.push(obj);
    return;
  }

  if (data.children) {
    data.children.forEach((e) => add(e, obj, e.id));
  }
}

function getId(data) {
  let result = null;

  function search(data) {
    if (!result || data.id > result) result = data.id;
    if (data.children) data.children.forEach(search);
  }

  search(data);
  return result;
}

const obj = {
  id: getId(tree) + 1,
  name: "HR",
  emoji: "🎧",
  parent_id: 2,
  children: [],
};

add(tree, obj);
console.log(JSON.stringify(tree));

// Delete elements

const remove = (root, nameToDelete, parent, idx) => {
  if (root.name === nameToDelete) {
    if (parent) {
      parent.children.splice(idx, 1);
    } else return null;
  }

  for (const [i, e] of root.children.entries()) {
    remove(e, nameToDelete, root, i);
  }

  return tree;
};

console.log(JSON.stringify(remove(tree, "Games")));
