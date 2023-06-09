// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search here....'
        value={keyword}
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
