import React from "react";
import "../css/button.css";

//buat properti untuk mengatur props apa saja yang dapat digunakan oleh component Button
interface ButtonProps {
   //properti primary yang bertipe data boolean untuk mengecek apakah primary benar atau salah
   primary?: boolean;
   //properti untuk mengatur warna background yang digunakan
   backgroundColor?: string;
   //properti untuk mengatur ukuran button
   size?: "small" | "medium" | "large";
}
