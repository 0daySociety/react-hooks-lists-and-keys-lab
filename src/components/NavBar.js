import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(typeof(links))
  console.log(links)

  const pageLinks =links.map((element,index)=>{
    return(<a key={index} href={"#"+element}>{element}</a>);
    
  })
 

  return <nav>
 
    {pageLinks}
    </nav>;
}

export default NavBar;
