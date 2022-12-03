import { useReducer } from "react";

import ShopContext from "./ShopContext";

const defaultBasket = {
  item: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type == "ADD") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

      console.log(action)
    console.log(totalAmount)
    let items;

    const existingIndex = state.item.findIndex((i) => i.id === action.item.id);
    const existingItem = state.item[existingIndex];

    if (existingItem) {
      let updateItem = existingItem;

      updateItem.amount =
        Number(updateItem.amount) + Number(action.item.amount);

      items = [...state.item];
      items[existingIndex] = updateItem;
    } else {
      items = state.item.concat(action.item);
    }

    return {
      item: items,
      totalAmount: totalAmount,
    };
  }

  if (action.type == "REMOVE") {

    console.log(action)
    const totalAmount =
      state.totalAmount - action.item.price;

    if (state.item.length > 0) {
      const findItemIndex = state.item.findIndex(
        (i) => i.id === action.item.id
      );

      console.log(state.item[findItemIndex]);
      let items = state.item;
      if (action.item.amount > 1) {
        const itemToReduce = state.item[findItemIndex];
        itemToReduce.amount = Number(itemToReduce.amount) - 1;
        items.splice(findItemIndex, itemToReduce);
      } else {
        const itemToRemove = state.item[findItemIndex];
        items.splice(findItemIndex, 1);
      }

      return {
        item: items,
        totalAmount: totalAmount,
      };
    }
  }

  return defaultBasket;
};

const ContextProvider = (props) => {
  const [basketState, dispatchBasketAction] = useReducer(
    cardReducer,
    defaultBasket
  );

  const addtoBasket = (item) => {
    dispatchBasketAction({ type: "ADD", item: item });
  };

  const removeBasket = (item) => {
    dispatchBasketAction({ type: "REMOVE", item: item });
  };

  const basketStateContext = {
    items: basketState.item,
    totalAmount: basketState.totalAmount,
    addItem: addtoBasket,
    removeItem: removeBasket,
  };

  return (
    <ShopContext.Provider value={basketStateContext}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
