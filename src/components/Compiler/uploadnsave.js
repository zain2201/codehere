import React, { useContext } from 'react';
import firebase from 'components/Authentication/firebase';
import { AuthContext } from 'views/Provider';
import { useHistory } from "react-router-dom";

export default function UploadnSave() {
    const [fileUrl, setFileUrl] = React.useState(null);
    const valval = useContext(AuthContext);
    const history = useHistory();


    const saveFile = () => {
        const name = document.getElementById('source');
        var data = name.value;
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'code.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click();
    };
    const onFileSave = async (e) => {
        if (valval.currentUser) {
            const file = e.target.files[0];
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            setFileUrl(await fileRef.getDownloadURL());
        }
        else {
            alert('Login to upload');
            history.push("/profile-page")
        }
    };
    const uploadFile = async (e) => {
        e.preventDefault();
        const filename = e.target.filename.value;
        if (!filename || !fileUrl) {
            return;
        }
        var yourdata = { fn: filename, url: fileUrl };
        var user = valval.currentUser;
        var uid = user.uid;
        firebase.database().ref('users').child(uid).push(yourdata)
            .then((data) => {
                console.log('Uploaded Code File', data);
                alert("File Uploaded")
                // Alert.alert('Saved');
            })
            .catch((error) => {
                console.log('Storing Error', error)
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} onSubmit={uploadFile}>
            <form style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                <input type="file" style={{ marginLeft: 5, marginRight: 10 }} onChange={onFileSave} />
                <input type="text" name="filename" placeholder="FileName" style={{ marginRight: 10 }} />
                <button class="btn btn-primary ml-4" >
                    Upload
                </button>
            </form>
            <button onClick={saveFile} type="button" class="btn btn-primary ml-5">
                Save
            </button>
        </div>
    )
}
