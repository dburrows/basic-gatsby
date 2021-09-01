import * as React from "react";
import { Link } from "gatsby";

import "./page-1.scss";

// markup
const Page1 = () => {
  return (
    <main className="page1">
      <title>Page One</title>
      <h1>Page One</h1>
      <Link to="/">Home</Link>
    </main>
  );
};

export default Page1;
