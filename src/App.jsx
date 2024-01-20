import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {
  let initialValues = [
    {
      id: 1,
      title: "Стул серый",
      img: "gray_chair.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 2,
      title: "Стол белый",
      img: "white_table.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?",
      category: "tables",
      price: "49.99",
    },
    {
      id: 3,
      title: "Диван",
      img: "sofa.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?",
      category: "sofa",
      price: "500.00",
    },
    {
      id: 4,
      title: "Лампа",
      img: "lamp.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?",
      category: "lamp",
      price: "250.00",
    },
    {
      id: 5,
      title: "Кресло",
      img: "chair.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?",
      category: "chair",
      price: "350.00",
    },
  ];
  const [positions, setPositions] = useState({
    orders: [],
    currentItems: initialValues,
    items: initialValues,
    showFullItem: false,
    fullItem: {},
  });
  useEffect(() => console.log(positions));
  const deleteOrder = (id) => {
    setPositions({
      ...positions,
      orders: positions.orders.filter((el) => el.id !== id),
    });
  };

  const addToOrder = (item) => {
    let isInArray = false;
    positions.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      setPositions({
        ...positions,
        orders: [...positions.orders, item],
      });
    }
  };
  const chooseCategory = (category) => {
    if (category === "all") {
      setPositions({
        ...positions,
        currentItems: positions.items,
      });
      return;
    }
    setPositions({
      ...positions,
      currentItems: positions.items.filter((el) => el.category === category),
    });
  };
  const onShowItem = (item) => {
    setPositions({
      ...positions,
      showFullItem: !positions.showFullItem,
      fullItem: item,
    });
  };
  return (
    <div className="wrapper">
      <Header orders={positions.orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onShowItem={onShowItem}
        onAdd={addToOrder}
        positions={positions.currentItems}
      />
      {positions.showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          onAdd={addToOrder}
          item={positions.fullItem}
        />
      )}
      <Footer />
    </div>
  );
}

/* 
items: [
  {
    id:1,
    title:'Стул серый',
    img:'',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?',
    category:'chairs',
    price:'49.99'
  },
  {
    id:2,
    title:'Стол белый',
    img:'',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendis?',
    category:'tables',
    price:'49.99'
  }, */
