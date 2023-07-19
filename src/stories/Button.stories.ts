//configure Meta data dengan ekspor default

//import Metadata dari Storybook
import type { Meta } from "@storybook/react";

//import Button dari Component Button
import { Button } from "../Components/Button";

//gunakan metadata untuk mengatur component mana yang dipilih
const meta: Meta<typeof Button> = {
   component: Button,
};

export default meta;
//end configure Meta data
