// ./src/stories/button.js

import PropTypes, { any } from "prop-types";
import styled, { css } from "styled-components";

interface ButtonProps {
   primary?: boolean;
   backgroundColor?: string;
   size?: "small" | "medium" | "large";
   color: string;
   label?: string;
   onClick: () => void;
}

const getVariantStyles = ({ primary = false, ...props }: ButtonProps) =>
   primary
      ? css`
        color: white;
        background-color: #1ea7fd;
      `
      : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = "medium", ...props }: ButtonProps) => {
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

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

export const Button3 = ({ label, ...rest }: any) => (
   <StyledButton {...rest}>{label}</StyledButton>
);

Button3.propTypes = {
   /**
    * Is this the principal call to action on the page?
    */
   primary: PropTypes.bool,
   /**
    * What background color to use
    */
   backgroundColor: PropTypes.string,
   color: PropTypes.string,
   /**
    * How large should the button be?
    */
   size: PropTypes.oneOf(["small", "medium", "large"]),
   /**
    * Button contents
    */
   label: PropTypes.string.isRequired,
   /**
    * Optional click handler
    */
   onClick: PropTypes.func,
};

Button3.defaultProps = {
   backgroundColor: null,
   primary: false,
   size: "medium",
   onClick: undefined,
};
