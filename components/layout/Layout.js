import React, { Fragment } from "react";
import mainHeader from "./main-header";

function Layout(props) {
  return (
    <Fragment>
      <mainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
