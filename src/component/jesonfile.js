import React, { Component } from "react";
import PostData from "../fakeData/products.json";
class PostList extends Component {
  render() {
    return (
      <div>
        <h1>hello There</h1>
        {PostData.map((postDetiles, indes) => {
          return <h1>{postDetiles.name}</h1>;
        })}
      </div>
    );
  }
}

export default PostList;
