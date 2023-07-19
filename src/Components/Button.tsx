//import file css untuk styling
import "../css/button.css";

//definisikan tipe properti yang dapat diterima Component Button
interface ButtonProps {
   //properti untuk
   primary?: boolean;
   //properti yang menyimpan warna background apa yang dipakai
   backgroundColor?: string;
   //properti untuk mengatur ukuran, hanya terdapat 3 pilihan
   size?: "small" | "medium" | "large";
   //properti untuk mengatur nama tombol
   label: string;
   //properti untuk mengatur event ketika tombol diklik
   onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
   primary = false,
   size = "medium",
   backgroundColor,
   label,
   ...props
}: ButtonProps) => {
   //variable yang digunakan untuk menentukan Class css apa yang akan digunakan berdasarkan property primary
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
         style={{ backgroundColor }}
         {...props}
      >
         {label}
      </button>
   );
};
