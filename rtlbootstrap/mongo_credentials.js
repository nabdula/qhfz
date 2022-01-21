/*
INSTRUCTIONS
1. include realm web sdk and jquery first in header
<script src="https://unpkg.com/realm-web@1.2.0/dist/bundle.iife.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
2. include this mongo_credentials.js at end of body tag (first to include at end)
3. include mongo_library.js after it (then include index.js)
4. create a user in mongodb realm online with an email and password
5. add all credentials here
*/
const APP_ID = 'hfz-wyvue';
const U_EMAIL = 'n@n.n';
const U_PASS = '123456';

const ATLAS_SERVICE = 'mongodb-atlas';
const app = new Realm.App({ id: APP_ID });

// LOGIN function
const login = async () => {
    // const credentials = Realm.Credentials.anonymous();
    const credentials = Realm.Credentials.emailPassword(U_EMAIL, U_PASS);

    try {
      const user = await app.logIn(credentials); // can now get user.id
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };


// Login user
login();