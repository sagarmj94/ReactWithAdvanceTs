import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Inputs";
import Form from "./components/Form";

function App() {
  // const inputRef = useRef<HTMLElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log("extractedData", extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="text" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <Container as={Button} onClick={() => {}}>
        Click Me
      </Container>
      {/* <Input label="Test" id="test" ref={inputRef} /> */}
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
