import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"

import "./App.css";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="31c0aa20-b845-45c6-8f3f-2a4bccebf91e"
      userName="austin"
      userSecret="austin"
      renderChatFeed={(chatAppProps) => {
        <ChatFeed { ... chatAppProps}/>;
      }}
    />
  );
};

export default App;
