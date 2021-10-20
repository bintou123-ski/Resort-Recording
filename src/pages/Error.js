import React from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import {Link} from "react-router-dom";

function error() {
    return (
        <div>
          <Hero>
            <Banner title="404" subtitle="Page not found">
              <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
            </Hero>
        </div>
    )
}

export default error();
