import React, { useContext, useState } from 'react';
import { AuthContext } from 'views/Provider';
import SingleSaved from './SingleSaved';
import firebase from 'components/Authentication/firebase';

export default function SavedFiles() {
    const [fetchedData, setFetchedData] = useState({});
    const [fetchedDataKeys, setFetchedDataKeys] = useState(fetchedData ? Object.keys(fetchedData) : Object.keys({}));
    const valval = useContext(AuthContext);

    const UpdateLogs = () => {
        var user = valval.currentUser;
        var uid = user.uid;
        firebase.database().ref('users').child(uid).once('value')
            .then((data) => {
                setFetchedData(data.val());
                setFetchedDataKeys(Object.keys(fetchedData));

                console.log(fetchedData);
            })
            .catch((error) => {
                console.log('Fetching Error', error)
            });
        // console.log(user);
        // console.log(uid);
    }
    return (
        <div>
            <button onClick={UpdateLogs} color='#b99aff' className="btn btn-md btn-info mt-3 mb-3">Tap to Refresh Saved Notes</button>
            {fetchedDataKeys.length > 0 ? (
                fetchedDataKeys.map((key, index) => (
                    <SingleSaved
                        key={key}
                        id={key}
                        index = {index + 1}
                        dataItem={fetchedData[key]}
                    />
                ))
            ) : (
                <h2>
                    Go save some Notes/Codes
                </h2>
            )}
        </div>
    )
}
