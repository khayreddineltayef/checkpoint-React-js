import React from "react";

const SideBarList = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <li class="menu-items">
          Departments
          <ul class="drop-menu">
            <li class="drop-menu-item">Marketing & PR</li>
            <li class="drop-menu-item">Customer Sucess & sales</li>
            <li class="drop-menu-item">IT,Product,Data</li>
            <li class="drop-menu-item">Finance & administration</li>
            <li class="drop-menu-item">HR & More</li>
          </ul>
        </li>
        {/* <button
              style={{ width: "89.275px", height: "40.2px" }}
              className="button"
            >
              &#9776;
            </button> */}
      </div>
    </div>
  );
};

export default SideBarList;
