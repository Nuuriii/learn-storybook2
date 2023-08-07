import React from "react";
import styled from "styled-components";

interface ButtonProps {
   children: string;
   primary?: boolean;
   onClick: () => void;
}

const ButtonStyle = styled.button<ButtonProps>`
   background-color: ${(props) => (props.primary ? "blue" : "gray")};
   color: white;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`;

export const Button = ({ primary, onClick, children }: ButtonProps) => {
   return (
      <ButtonStyle primary={primary} onClick={onClick}>
         {children}
      </ButtonStyle>
   );
};
