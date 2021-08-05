import Content from "../../components/layout/Content";
import { Button, Modal } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Content>
      <h2 className={`title2 `}> Portfolio </h2>
      <Button
        variant="primary"
        onClick={() => {
          alert("Hello");
        }}
      >
        {" "}
        Click Me{" "}
      </Button>
    </Content>
  );
}
