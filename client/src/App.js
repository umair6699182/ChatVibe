import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

function App() {
  const ClinetId =
    "353469851044-gj1uju48139e7k6hlsq6v2t67v3r4pk0.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={ClinetId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
