const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();

exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const displayName = event.data.displayName;
    const newUserRef = ref.child(`/users/${uid}`);
    return newUserRef.set({
        nbPoints: 50,
        nbResultsFounded: 0,
        userName: displayName,
        matchs: {
            nbMatchsBetted: 0
        }
    });
});
