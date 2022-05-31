import React, { useState } from "react";
import { render } from "@testing-library/react";

export function setup(
  FormComponent: React.FC<React.HTMLProps<HTMLInputElement>>,
  props: { id: string; value: string }
) {
  let onChange;
  function TestEnvironment() {
    const [value, setValue] = useState(props.value);

    onChange = jest.fn((v) => setValue(v));

    return <FormComponent id={props.id} value={value} onChange={onChange} />;
  }
  render(<TestEnvironment />);
  return { onChange };
}
