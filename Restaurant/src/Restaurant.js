import React from "react";
import "./styles.css";
import Menu from "./menuApi.js";
import Menucard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];

function Restaurant() {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
}

export default Restaurant;
