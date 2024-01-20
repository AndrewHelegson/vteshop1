import React from "react";
import Item from "./Item";

export default function Items({ positions, onAdd, onShowItem }) {
  return (
    <main>
      {positions.map((el) => (
        <Item onShowItem={onShowItem} key={el.id} item={el} onAdd={onAdd} />
      ))}
    </main>
  );
}

/* 
<h1 key={el.title}>{el.title}</h1>
render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <h1>{el.title}</h1>
        ))}
      </main>
    );
  } */
