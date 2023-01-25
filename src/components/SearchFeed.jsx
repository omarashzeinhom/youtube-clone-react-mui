//import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { SideBar } from "./index";

const SearchFeed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
