import React from "react";

import { Header } from "./Header";

type User = {
   name: string;
};

export const Page = () => {
   const [user, setUser] = React.useState<User>();

   return (
      <article>
         <Header
            user={user}
            onLogin={() => setUser({ name: "Nurrohman" })}
            onLogout={() => setUser(undefined)}
            onCreateAccount={() => setUser({ name: "Nurrohman" })}
         />
      </article>
   );
};
