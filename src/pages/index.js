import * as React from "react";
import { Link } from "gatsby";

import "./index.scss";

// markup
const IndexPage = () => {
  return (
    <main className="index">
      <title>Home Page</title>
      <h1>HOME PAGE</h1>
      <Link to="/page-1">Page One</Link>
    </main>
  );
};

export default IndexPage;
