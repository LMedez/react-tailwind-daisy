import React    from "react";
import template from "./CardComponent.jsx";

class CardComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CardComponent;
