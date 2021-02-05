import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";

import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
