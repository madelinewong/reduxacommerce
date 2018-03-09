const initalState = [
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Javelin (caution)",
    price: 500.0,
    count: 0
  },
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Albino Snail",
    price: 3.99,
    count: 0
  },
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Rug",
    price: 400.0,
    count: 0
  }
];
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const position = action.payload.value;
      const selectedItem = state[position];
      const before = state.slice(0, position);
      const after = state.slice(position + 1);
      const newProduct = {
        ...selectedItem,
        count: selectedItem.count + 1
      };
      return [...before, newProduct, ...after]; }
    case "REMOVE_ITEM": {
      const position = action.payload.value;
      const selectedItem = state[position];
      const before = state.slice(0, position);
      const after = state.slice(position + 1);
      const newProduct = {
        ...selectedItem,
        count: selectedItem.count === 0 ? 0 : selectedItem.count - 1
      };
      return [...before, newProduct, ...after];
    }
    default: 
    return state;
  }
};

export default reducer;
