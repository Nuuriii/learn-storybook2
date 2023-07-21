//import metadata dari storybook
import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../Components/Header";

//Konfigurasi Story
const meta = {
   title: "Example/Header",
   component: Header,
   tags: ["autodocs"],
   parameters: {
      layout: "fullscreen",
   },
} satisfies Meta<typeof Header>;

//export variable meta
export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
   args: {
      user: {
         name: "Nurrohman",
      },
   },
};

export const LoggedOut: Story = {};
