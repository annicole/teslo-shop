import {
  AddCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface Props {
  currentValue: number;
  updateQuantity: (qty: number) => void;
  maxValue: number;
}
export const ItemCounter = ({
  currentValue,
  updateQuantity,
  maxValue,
}: Props) => {
  const removeQty = () => {
    if (currentValue === 1) return;
    updateQuantity(currentValue -1);
  };

  const addQty = () => {
    if (currentValue >= maxValue) return;
    updateQuantity(currentValue +1);
  };

  return (
    <Box display="flex" alignItems={"center"}>
      <IconButton onClick={removeQty}>
        <RemoveCircleOutlineOutlined />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {currentValue}
      </Typography>
      <IconButton onClick={addQty}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
