import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowd] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()-_=+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordTOClipbord = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  console.log(password);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8  bg-gray-800 text-orange-500 ">
      <h1 className="text-white text-center overflow-hidden my-2 ">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Passowrd"
          value={password}
          ref={passwordRef}
        />

        <button
          className="outline-none bg-blue-700 text-white px-6 py-0.5 shrink-0"
          onClick={copyPasswordTOClipbord}
        >
          Copy
        </button>
      </div>

      <div className="flex gap-x-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length} </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowd((prev) => !prev);
            }}
          />
          <label htmlFor="charecter">Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
