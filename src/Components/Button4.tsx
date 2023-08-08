import PropTypes from "prop-types";
import styled, { css } from "styled-components";

interface ButtonProps {
   primary?: boolean;
   backgroundColor?: string;
   size?: "small" | "medium" | "large";
   color?: "string";
   label?: string;
   onClick: () => void;
}

const getVariantStyles = ({ primary = false }: ButtonProps) =>
   primary
      ? css`
           color: white;
           background-color: #0f2635;
        `
      : css`
           color: #333;
           background-color: transparent;
           box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `;

const getSizeStyles = ({ size = "medium" }: ButtonProps) => {
   switch (size) {
      case "small": {
         return css`
            font-size: 12px;
            padding: 10px 16px;
         `;
      }
      case "large": {
         return css`
            font-size: 16px;
            padding: 12px 24px;
         `;
      }
      default: {
         return css`
            font-size: 14px;
            padding: 11px 20px;
         `;
      }
   }
};

// Primary UI component for user interaction

const MyButtons = styled.button`
   font-family: "Nunito Sans", "Helvetica Neue", Arial, sans-serif;
   font-weight: 700;
   border: 0;
   border-radius: 3em;
   cursor: pointer;
   display: inline-block;
   line-height: 1;

   ${(props: any) => getVariantStyles(props)}
   ${(props: any) => getSizeStyles(props)}
   ${({ backgroundColor }: any) =>
      backgroundColor &&
      css`
         background-color: ${backgroundColor};
      `}
`;

export const Button4 = ({ label, ...rest }: any) => (
   <MyButtons {...rest}> {label}</MyButtons>
);

Button4.PropTypes = {
   primary: PropTypes.bool,
   backgroundColor: PropTypes.string,
   color: PropTypes.string,
   size: PropTypes.oneOf(["small", "medium", "large"]),
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func,
};

Button4.defaultProps = {
   backgroundColor: null,
   color: null,
   primary: "medium",
   onClick: undefined,
};
