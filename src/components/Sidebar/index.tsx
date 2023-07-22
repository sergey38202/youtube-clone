import React from "react";
import { categories } from "../../constants/constants";

import {TSidebarProps} from "./types";
import * as SC from "./styles";

const Sidebar = ({ selectedCategory, setSelectedCategory }: TSidebarProps) => (
  <SC.SidebarContainer>
    {categories.map((category) => {
      const { name, icon } = category;

      const isSelectedCategory = name === selectedCategory;

      return (
          <SC.SidebarBtn
              className="category-btn"
              selectedCategory={isSelectedCategory}
              onClick={() => setSelectedCategory(name)}
              key={name}
          >
            <SC.SidebarBtnIcon selectedCategory={isSelectedCategory}>
              {icon}
            </SC.SidebarBtnIcon>
            <SC.SidebarBtnTitle selectedCategory={isSelectedCategory}>
              {name}
            </SC.SidebarBtnTitle>
          </SC.SidebarBtn>
      )
    })}
  </SC.SidebarContainer>
);

export default Sidebar;
