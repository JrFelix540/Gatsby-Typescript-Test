import React, { useState } from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export const Form: React.FC = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<string | undefined>(undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ value }),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("failure");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input name="test-form" onChange={handleChange} value={value} />
      {status && <p>{status}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};
