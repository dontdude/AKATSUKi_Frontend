import '../styles/globals.css';

//Toastify
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

//context
import AuthState from "../context/AuthState";  

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <title>AKATSUKi</title>
      <AuthState>
          <ToastContainer position="top-right" />
          <Component {...pageProps} />
      </AuthState>
    </div>
  );
}

export default MyApp;
