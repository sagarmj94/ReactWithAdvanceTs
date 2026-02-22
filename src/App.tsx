import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Inputs";

function App() {
  const inputRef = useRef(null);

  return (
    <main>
      <Container as={Button} onClick={() => {}}>
        Click Me
      </Container>
      <Input label="Test" id="test" ref={inputRef} />
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <p>
        <Button disabled>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Button</Button>
      </p> */}
    </main>
  );
}
export default App;
