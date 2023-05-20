import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  useEffect(() => {
    if (toDos.length > 0) console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos.({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type='text'
          value={toDo}
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
