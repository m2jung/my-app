// 페이지설정 
import { Global } from '@emotion/react'
import { globalStyle } from "../src/commons/styles/globalStyles";
import { CookiesProvider } from 'react-cookie';
import {initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// firebase (web app)
const firebaseConfig = {
  apiKey: "AIzaSyD5dfm9MFcyNF_zDMxP0Su5jcFFbAndh4M",
  authDomain: "my-sns-firebase.firebaseapp.com",
  projectId: "my-sns-firebase",
  storageBucket: "my-sns-firebase.appspot.com",
  messagingSenderId: "769653103767",
  appId: "1:769653103767:web:0eba8db3253ee288199dd2",
  measurementId: "G-PW4PY07SME"
}
// firebase 모듈을 가져온다.
// firebase config 값을 적는다.
// firebase 변수를 해당 설정값으로 초기화한다.
// firebase database 객체를 database 변수에 넣어준다.
// 다른 곳에서 사용할 수 있도록 module 을 export 해주는데 firebase database 사용 할 것이기 때문에 database 변수를 export 해준다.
export const firebaseApp = initializeApp(firebaseConfig);
  function App({ Component, pageProps }) {

    return (
      <CookiesProvider>
        <Global styles {...globalStyle}/>
        <Component {...pageProps} />
      </CookiesProvider>
    )
  }
  export default App;
