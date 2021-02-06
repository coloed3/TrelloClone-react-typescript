import React from "react";
import { AddNewItem } from "./AddNewItem";

import { Column } from "./Column";

import {AppContainer, ColumnContainer} from "./styles";
import { useAppState } from "./AppStateContext";
function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
