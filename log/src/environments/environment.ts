// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBwDtfk624VrWI36LQAg0mJ2ERX01E0tWA',
    authDomain: 'tanksalgologin.firebaseapp.com',
    databaseURL: 'https://tanksalgologin.firebaseio.com',
    projectId: 'tanksalgologin',
    storageBucket: 'tanksalgologin.appspot.com',
    messagingSenderId: '44507497233'
  }
};
