import { Input, Select } from "antd";
import { Container } from "react-bootstrap";

export default function CurrencyRow(props) {
  const {
    curOptions,
    activeCurrency,
    selectionHandler,
    convertNumber,
    convertNumberChangeHandler,
  } = props;
  return (
    <div>
      <Container justify-content="center">
        <Input
          min="0"
          oninput="validity.valid || (value='0')"
          // bordered={false}
          type="number"
          value={convertNumber}
          onChange={convertNumberChangeHandler}
          style={{
            fontSize: "30px",
            marginRight: "10px",
            width: "500px",
            borderRadius: "10px",
          }}
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
