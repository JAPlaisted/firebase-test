import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5AxHSdQqK_YP8avbyIhmNQ22cfS9ygKo",
  authDomain: "firetest-577f2.firebaseapp.com",
  projectId: "firetest-577f2",
  storageBucket: "firetest-577f2.appspot.com",
  messagingSenderId: "296828644208",
  appId: "1:296828644208:web:85933e15413b01889a7db5",
  measurementId: "G-B7E8XY0W0M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
