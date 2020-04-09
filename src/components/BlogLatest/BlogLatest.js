import React, { Component } from "react";
import Trademark from "./BlogChild/Trademark";
import Blog from "./BlogChild/Blog";
import NavWesite from "../NavWesite/NavWesite";

class Blog_latest extends Component {
  render() {
    return (
      <div className="blog_latest_trademark_container">
        <NavWesite />
        <Blog />
        <Trademark />
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!4v1581599637550!6m8!1m7!1svsXUo6yo0NdjsXT6vPIAXA!2m2!1d51.51880808946012!2d-0.1547634856692368!3f65.52!4f-10.799999999999997!5f1.2691112702514291"
          width="100%"
          height={450}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default Blog_latest;
