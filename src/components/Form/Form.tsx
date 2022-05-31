import React, { useState } from "react";
import { sendNetlifyFormRequest } from "../../utils/network";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | undefined>(undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await sendNetlifyFormRequest("test", { email: email });
    console.log(response);
    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("failure");
    }
  };
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="test" />
      <Input name="email" onChange={handleChange} value={email} />
      {status && <p>{status}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

// Netlify Response
// Successful
// {
//   body: {
//     ReadableStream { locked: false }
//     bodyUsed: false
//     headers: Headers {  }
//     ok: true
//     redirected: false
//     status: 200
//     statusText: "OK"
//     type: "basic"
//     url: "https://main--dancing-wisp-96cb17.netlify.app/"
//   }
// }
