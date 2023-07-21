import "../css/paragraph.css";

interface ParagraphProps {
   primary?: boolean;
   color?: string;
   size?: "small" | "medium" | "large";
   label?: string;
}

export const Paragraph = ({
   primary = false,
   color,
   size = "medium",
   label,
}: ParagraphProps) => {
   const mode = primary ? "sb-paragraph--primary" : "sb-paragraph--secondary";

   return (
      <p
         className={["sb-paragraph", `sb-paragraph--${size}`, mode].join(" ")}
         style={{ color }}
      >
         {label}
      </p>
   );
};
