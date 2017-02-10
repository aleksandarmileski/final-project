import {Component} from '@angular/core';
import {initializeApp, database} from 'firebase';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fp works!';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAQmr-eLJCFf6TIMU8prx_ukLgYZ9x1E-U",
      authDomain: "final-project-dfce9.firebaseapp.com",
      databaseURL: "https://final-project-dfce9.firebaseio.com",
      storageBucket: "final-project-dfce9.appspot.com",
      messagingSenderId: "710917267822"
    };
    initializeApp(config);

    var root = database().ref();

    root.on('value', function (snap) {
      console.log(snap.val())
    });

  }
}
