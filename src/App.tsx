import { Button } from "./stories/Button";
import { Header } from "./stories/Header";

function App() {
  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        user={{
          name: "Stefan Schlicker",
        }}
      />
      <h1>Hello World</h1>
      <Button label="Get in Contact" onClick={() => {}} primary size="large" />
    </>
  );
}

export default App;
