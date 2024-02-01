import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map(function (oneLink) {
    return (
      <a key={oneLink} href={"#" + oneLink}>{oneLink}</a>
    );
  })

  return <nav>{link}</nav>;
}

export default NavBar;
