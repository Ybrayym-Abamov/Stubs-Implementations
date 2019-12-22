import React from "react";
import { postImage } from "../clientApi"


class UploadImageForm extends React.Component {
    state = {
        resultMessage: ""
    };
    handleImageUpload = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        postImage(formData).then(postImageResponse => {
            this.setState({ resultMessage: "Upload successful!" });
        });
    }
    render() {
        return (
            <>
             <form onSubmit={this.handleImageUpload} >
                 <input type="file" name="image" />
                 <input type="submit" value="Upload Image" />
             </form>
             {this.state.resultMessage && this.state.resultMessage}
            </>
        );
    }
}

export default UploadImageForm;
