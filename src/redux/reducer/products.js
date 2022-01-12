let initialState = [
  {
    id: 1,
    name: "Iphone 12pro",
    image: "https://hc.com.vn/i/ecommerce/media/GS.006091_FEATURE_71013.jpg",
    description: "Do Apple Sản Xuất",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "MacBook Pro 2020",
    image: "https://hc.com.vn/i/ecommerce/media/GS.005343_FEATURE_68084.jpg",
    description: "Do Apple Sản Xuất",
    price: 1500,
    inventory: 10,
    rating: 5,
  },
  {
    id: 3,
    name: "Ipad Pro",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/238623/ipad-pro-m1-11-inch-wifi-sliver-1-600x600.jpg",
    description: "Do Apple Sản Xuất",
    price: 800,
    inventory: 10,
    rating: 4,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
