import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {

  public formTitle = 'Login';
  actionFired = false;
  actionResult = false;
  DBMessage = '';
  private usersList;

  private user = {
    userEmail: null,
    userPassword: null,
  };
  constructor(private _firebaseAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.usersList = db.list('/users');
    console.log(this.usersList);
  }

  ngOnInit() {
  }

  handleInput(data) {
    this.user[data.target.name] = data.target.value;
  }

  getAction(event) {
    const actionName = event.target.name;
    this.actionFired = true;
    if (actionName === 'login') {
      this.login(this.user.userEmail, this.user.userPassword)
        .then(value => {
          this.DBMessage = 'Login Successfuly';
          this.actionResult = true;
          this.user = {
            userEmail: null,
            userPassword: null,
          };
        })
        .catch(err => {
          console.log('error: ' + err);
          this.DBMessage = err + '\nCan\'t Login now, Try again!.';
          this.actionResult = false;
        });
    } else if (actionName === 'register') {
      this.register(this.user.userEmail, this.user.userPassword)
        .then((res) => {
          this.DBMessage = 'Registered Successfuly';
          this.actionResult = true;
          this.user = {
            userEmail: null,
            userPassword: null,
          };
        })
        .catch((err) => {
          console.log('error: ' + err);
          this.DBMessage = err + '\nCan\'t Register now, Try again!.';
          this.actionResult = false;
        });
    }

    
  }

  login(email, pass) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, pass);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  register(email, pass) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, pass);
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, pass);
  }

}
