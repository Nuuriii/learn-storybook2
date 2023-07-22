//import css
import "../css/button2.css";

//create interface for configure styling
//feature:[change mode, change background, change size, change name element]
interface ButtonProps2 {
   primary?: boolean;
   background?: string;
   borderRadius?: string;
   color?: string;
   size?: "sm" | "md" | "lg" | "xl";
   label?: string;
   onClick: () => void;
}

export const Button2 = ({
   primary = false,
   size = "md",
   background,
   borderRadius,
   color,
   label,
   ...props
}: ButtonProps2) => {
   const mode = primary ? "sb-button--primary" : "sb-button--secondary";
   return (
      <button
         className={["sb-button", `sb-button--${size}`, mode].join(" ")}
         style={{ background, color, borderRadius }}
         {...props}
      >
         {label}
      </button>
   );
};
