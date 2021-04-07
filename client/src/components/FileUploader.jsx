import React, {useRef, useState} from 'react';
//useRef hides the default and adds a trigger to the custom input form using an onchange trigger

const FileUploader = ({onFileSelectSuccess, onFileSelectError}) => {
    const fileInput = useRef(null);
    const [state, setState] = useState({});

    const handleFileInput = (e) => {
        //handle validations
        const file = e.target.files[0];
        //if(file.size > 1024) {
            //onFileSelectError({ error: "File sice cannot exceed more than 1MB"});
            onFileSelectSuccess(file)
            console.log(file);
    }
        //onFileSelect(e.target.files[0])

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"> Hi </button>
        </div>
    )
}

export default FileUploader;