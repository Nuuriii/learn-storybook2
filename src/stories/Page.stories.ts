//import Metadata dari storybook
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

//import Component
import { Page } from "../Components/Page";

//buat variable untuk melakukan konfigurasi untuk story yang akan kita buat
const meta = {
   title: "Example/Page",
   component: Page,
   tags: ["autodocs"],
   parameters: {
      layout: "fullscreen",
   },
} satisfies Meta<typeof Page>;

//export variable meta
export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
   play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const loginButton = await canvas.getByRole("button", {
         name: /Log in/i,
      });
      await userEvent.click(loginButton);
   },
};
