import React, { useState } from "react";
import { Header, Input, ToDos, Softkey } from "./components";
import { useNavigation } from "./hooks";

export default function App() {
  const [toDos, setToDo] = useState([]);

  const [current, setNavigation] = useNavigation();

  const onKeyCenter = () => {
    const currentElement = document.querySelector("[nav-selected=true]");
    const currentNavigationIndex = parseInt(currentElement.getAttribute("nav-index"), 10);

    const isATask = currentNavigationIndex > 0;
    if (isATask) {
      setToDo(prevState => {
        const current = [...prevState];
        current[currentNavigationIndex - 1].completed = !current[currentNavigationIndex - 1].completed;
        return current;
      });
    } else if (currentElement.value.length) {
      const toDo = { name: currentElement.value, completed: false };
      setToDo(prevState => [...prevState, toDo]);
      currentElement.value = "";
    }
  };

  const onKeyRight = () => {
    const currentIndex = parseInt(
      document.querySelector("[nav-selected=true]").getAttribute("nav-index"),
      10
    );
    if (currentIndex > 0) {
      setToDo(prevState => {
        const current = [...prevState];
        current.splice(currentIndex - 1, 1);
        const goToPreviousElement = Boolean(current.length);
        setNavigation(goToPreviousElement ? currentIndex - 1 : 0);
        return current;
      });
    }
  };

  const onKeyLeft = () => {
    const currentIndex = parseInt(
      document.querySelector("[nav-selected=true]").getAttribute("nav-index"),
      10
    );
    if (currentIndex > 0) {
      setToDo(prevState => {
        const current = [...prevState];
        current.splice(currentIndex - 1, 1);
        const goToPreviousElement = Boolean(current.length);
        setNavigation(goToPreviousElement ? currentIndex - 1 : 0);
        return current;
      });
    }
  };

  return (
    <>
      <Header title="Account details" />

      <Input type="text" label="Firstname" />
      <Input type="text" label="Lastname" />
      <Input type="text" label="Gender" />
      <Input type="text" label="Address" />
      <Input type="text" label="Phone number" />
      {/* <ToDos toDos={toDos} /> */}

      <Softkey
        left={current.type === "INPUT" ? "PREV" : "Toggle"}
        
        onKeyLeft={onKeyLeft}
        right={current.type === "INPUT" ? "NEXT" : "Toggle"}
        onKeyRight={onKeyRight}
      />
    </>
  );
}
