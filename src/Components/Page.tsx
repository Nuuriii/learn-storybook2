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

         <section className='storybook-page'>
            <h2>Pages in Storybook</h2>
            <p>
               We recommend building UIs with a
               <a
                  href='https://componentdriven.org'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <strong>component-driven</strong>
               </a>
               process starting with atomic components and ending with pages.
            </p>
         </section>
      </article>
   );
};
