import React, { Component } from 'react';

const ListItem = function ListItem (props) {
  return (
    <div className="list-item">
      <h2>{props.item.header}</h2>
      <div className="content">
        {props.item.body}
      </div>
    </div>
  );
}

export default ListItem;
