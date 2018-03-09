
const initalState = [
    {
        imgSrc: "https://via.placeholder.com/100x100",
        name: "Javelin (caution)",
        price: 500.00,
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
        price: 400.00,
        count: 0
    }
];
const reducer = (state=initalState, action) => {
    console.log('product stuff');
    return state;
}

export default reducer;