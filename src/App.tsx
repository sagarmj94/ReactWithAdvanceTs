import Button from "./components/Button";
import Input from "./components/Inputs";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <p>
        <Button disabled>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Button</Button>
      </p>
    </main>
  );
}
export default App;
