//configure Meta data dengan ekspor default

//import Metadata dari Storybook
import type { Meta, StoryObj } from "@storybook/react";

//import Button dari Component Button
import { Button } from "../Components/Button";

//gunakan metadata untuk mengatur component mana yang dipilih
const meta: Meta<typeof Button> = {
   component: Button,
};

//export meta
export default meta;
//end configure Meta data

//mendefinisikan cerita
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
   render: () => <Button primary label='Button' />,
};
