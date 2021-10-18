import React, { useState } from "react";
import Header from "./Header"

const Layout = (props) => {


  return (
    <>
      <Header {...props} />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;