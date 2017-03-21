import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import axios from 'axios'
import 'bulma/css/bulma.css'

import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBaQGpHS5QZRQBE1HaEXGYMhZ7hCgzMusU",
  authDomain: "sukusuku-9b393.firebaseapp.com",
  databaseURL: "https://sukusuku-9b393.firebaseio.com",
  storageBucket: "sukusuku-9b393.appspot.com",
  messagingSenderId: "201279160411"
};
firebase.initializeApp(config);
