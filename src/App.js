import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import { useState } from "react";
import Note from "./Note";

function App() {
  const [Items, setItems] = useState([]);

  function addItems(item) {
    console.log(item);
    if (item.title == "") {
      alert("Title not set !!!");
    } else if (item.content == "") {
      alert("Content not set !!!");
    } else {
      setItems((prevItem) => {
        return [...prevItem, item];
      });
    }
    console.log(Items);
  }

  function d(i) {
    setItems(() => {
      return Items.filter((currData, index) => index !== i);
    });
  }

  console.log(Items);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <CreateNote addItems={addItems} />
        <div className="note-body">
          {Items.map((item, index) => {
            console.log(index);
            return (
              <Note
                key={index}
                title={item.title}
                content={item.content}
                id={index}
                Delete={d}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
