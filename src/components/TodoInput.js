import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoInput extends Component {
  render() {
    return (
      <section>
        <h2>todo input</h2>
        <Item />
      </section>
    );
  }
}
