import Button from "./components/Button";
import Input from "./components/Inputs";

function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}

      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          A Button
        </Button>
      </p>
    </main>
  );
}
export default App;
