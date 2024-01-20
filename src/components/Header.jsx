import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  const showOrders = (orders) => {
    let summa = 0;
    orders.forEach((el) => (summa += Number.parseFloat(el.price)));
    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} key={el.id} item={el}></Order>
        ))}
        <p className="summa">Сумма:{new Intl.NumberFormat().format(summa)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
