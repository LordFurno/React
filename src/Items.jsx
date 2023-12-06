import React from 'react';

const itemList = [
  { name: 'Item1', description: 'This is a description', price: "price" },
  { name: 'Item2', description: 'This is a description', price: "price" },
  { name: 'Item3', description: 'This is a description', price: "price" },
  { name: 'Item4', description: 'This is a description', price: "price" },
  { name: 'Item5', description: 'This is a description', price: "price" },
];

function Items() {
  return (
    <div>
      <h1>Items</h1>
      {itemList.map((v, i) => {
        return (
          <div index={i}>
            <div>{v.name}</div>
            <div>{v.description}</div>
            <div>{v.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
