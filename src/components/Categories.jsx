import React, { useState } from "react";

export default function Categories({ chooseCategory }) {
  const [list, setList] = useState({
    categories: [
      {
        key: "all",
        name: "Всё",
      },
      {
        key: "chairs",
        name: "Стулья",
      },
      {
        key: "tables",
        name: "Столы",
      },
      {
        key: "sofa",
        name: "Диваны",
      },
      {
        key: "lamp",
        name: "Свет",
      },
    ],
  });

  return (
    <div className="categories">
      {list.categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
