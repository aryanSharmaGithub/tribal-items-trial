import React from "react";
import classes from "./ItemInfo.module.css";
import ItemInfoForm from "./ItemInfoForm";
const ItemInfo = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemInfoForm id={props.id} />
      </div>
    </li>
  );
};

export default ItemInfo;
