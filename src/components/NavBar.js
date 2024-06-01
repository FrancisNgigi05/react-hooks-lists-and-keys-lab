import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const link = links.map((lin) => {
    return (
      <a href={`#${lin}`} key={lin}>{lin}</a>
    );
  })

  return (
    <nav>
      {link}
    </nav>
  );
}

export default NavBar;