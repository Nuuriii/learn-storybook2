//import Metadata dan type dari storybook yang digunakan untuk mendefinisikan cerita dalam bentuk objek
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Components/Button";

//kode dibawah ini tidak digunakan untuk membuat story secara langsung, tetapi kode ini digunakan untuk mengatur dan mempersiapkan Story sehingga sehingga story dapat ditampilkan dengan benar di dalam StoryBook

//variable ini menggunakan utilitas Storybook yaitu meta untuk mendefinisikan metadata dari story
const meta: Meta<typeof Button> =
   //typeof digunakan untuk menunjukkan kalau meta berlaku ke component Button
   {
      title: "Example/Button",
      component: Button,
      //property parameter digunakan untuk memberikan konfigurasi tambahan ke Story
      parameters: {
         //property layout digunakan untuk menentukan posisi component di canvas Storybook
         layout: "centered",
      },
      tags: ["autodocs"],
      //property dibawah ini digunakan untuk mengatur konfigurasi argument(args) di dalam story
      argTypes: {
         //ini untuk mengatur warna latar belakang tombol
         backgroundColor: { control: "color" },
      },
   };

//baris ini meng-ekspor variable meta yang berisi metadata dan konfigurasi untuk cerita component
export default meta;

//baris ini digunakan untuk mendefinisikan tipe 'Story' menggunakan 'StoryObj' yang digunakan untuk mendeklarasikan story Component yang akan ditampilkan di Storybook
type Story = StoryObj<typeof Button>;

//yee!!!... saatnya menulis Story!!!.....
export const Primary: Story = {
   args: {
      primary: true,
      label: "Button",
   },
};

export const Secondary: Story = {
   args: {
      label: "Click Me",
   },
};
