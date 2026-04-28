import { useState } from "react";

export default function App() {
  const [code, setCode] = useState<string>("");

  const generateCode = () => {
    const random = Math.random().toString(36).substring(2, 8);
    setCode(random);
  };

  return (
    <div>
      <h2>Random Code: {code}</h2>
      <button onClick={generateCode}>Generate Code</button>
    </div>
  );
}