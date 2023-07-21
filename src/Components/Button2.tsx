import React from "react";

//create interface for configure styling
//feature:[change mode, change background, change size, change name element]
interface ButtonProps2 {
   primary?: boolean;
   background?: string;
   color?: string;
   size?: "sm" | "md" | "lg" | "xl";
   label?: string;
   onClick: () => void;
}

export const Button2 = () => {
   return <div>Button2</div>;
};
