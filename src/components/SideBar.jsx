import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column'},
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ marginRight: "15px" }}>{category?.icon}</span>
        <span>{category?.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
