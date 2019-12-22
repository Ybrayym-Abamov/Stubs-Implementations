import React from "react";
import { getImages } from "../clientApi"


class ImageList extends React.Component {
    state = {
        images: [],
    };
    componentDidMount() {
        getImages().then(getImagesResponse => {
            this.setState({ images: getImagesResponse.imageURIs });
        });
    }
    render() {
        return (
            <>
                {this.state.images.map( imageURL => (
                <img src={imageURL} />
                ))}
            </>
        );
    }
}

export default ImageList;
