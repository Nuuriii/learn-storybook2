import type { Meta, StoryObj } from "@storybook/react";
import { Button4 } from "../Components/Button4";

//config story
const configButton = {
   title: "Example/Button4",
   component: Button4,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      backgroundColor: { control: "color" },
      color: { control: "color" },
   },
} satisfies Meta<typeof Button4>;

export default configButton
type Story = StoryObj<typeof configButton>

export const Primary: Story = {
    args: {
        primary: true,
        label: "Primary"
    }
}

export const Secondary: Story= {
    args: {
        label:"Secondary"
    }
}

export const Small: Story ={
    args:{
        size:"small",
        label: "ini Small",
    }
}

export const Medium: Story= {
    args:{
        size: "medium",
        label: "ini Medium"
    }
}

export const Large: Story = {
    args: {
        size: "large",
        label:"ini large"
    }
}

export const ExtraLarge: Story = {
    args:{
        size: "xl",
        label: "ini extra besar"
    }
}