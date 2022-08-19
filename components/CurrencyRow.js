import { Input, Select } from "antd";
import { Container } from "react-bootstrap";

export default function CurrencyRow(props) {
  const { curOptions, activeCurrency, selectionHandler } = props;
  return (
    <div>
      <Container justify-content="center">
        <Input
          type="number"
          style={{ marginRight: "10px", width: "500px", borderRadius: "10px" }}
        />
        <Select
          value={activeCurrency}
          style={{ width: "80px", borderRadius: "10px" }}
          onChange={selectionHandler}
        >
          {curOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Container>
    </div>
  );
}
