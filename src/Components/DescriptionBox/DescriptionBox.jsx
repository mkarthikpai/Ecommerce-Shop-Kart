import React from "react";
import Styles from "./descriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={Styles.descriptionbox}>
      <div className={Styles.descriptionbox_navigator}>
        <div className={Styles.descriptionbox_nav_box}>Description</div>
        <div className={`${Styles.descriptionbox_nav_box} ${Styles.fade}`}>
          Reviews (115)
        </div>
      </div>
      <div className={Styles.descriptionbox_description}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          veniam expedita, harum natus labore omnis debitis enim magnam
          repellendus deleniti saepe. Enim et, iste sapiente fugiat, quod
          repellendus nisi accusantium beatae pariatur eveniet tempora dolorem
          temporibus reprehenderit minus. Explicabo odio ipsam harum aperiam
          nisi nam praesentium in soluta corrupti sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime
          ad quisquam, qui aspernatur sit possimus ea velit, iusto eius quis
          enim? Recusandae odio enim similique, laudantium nihil odit
          perspiciatis?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
