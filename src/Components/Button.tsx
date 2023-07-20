import "../css/button.css";

//buat properti untuk mengatur props apa saja yang dapat digunakan oleh component Button
interface ButtonProps {
   //properti primary yang bertipe data boolean untuk mengecek apakah primary benar atau salah
   primary?: boolean;
   //properti untuk mengatur warna background yang digunakan
   backgroundColor?: string;
   //properti untuk mengatur ukuran button
   size?: "small" | "medium" | "large";
   //properti untuk mengatur nama button
   label: string;
   //properti untuk mengatur sebuah event
   onClick?: () => void;
}

//primary UI component for user interaction

export const Button = ({
   primary = false,
   size = "medium",
   backgroundColor,
   label,
   ...props
}: ButtonProps) => {
   //buat variable untuk mengecek apakah primary bernilai true atau false
   const mode = primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";
   return (
      <button
         type='button'
         className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
         ].join(" ")}
         //warna background sesuai dengan yang disimpan di props backgroundColor
         style={{ backgroundColor }}
         {...props}
      >
         {label}
      </button>
   );
};
