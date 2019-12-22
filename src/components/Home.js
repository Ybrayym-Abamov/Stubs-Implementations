import React from "react";
import { ImageList, UploadImageForm } from ".";


class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Kenziegram</h1>
        <UploadImageForm />
        <ImageList />
      </>
    );
  }
}

export default Home;
