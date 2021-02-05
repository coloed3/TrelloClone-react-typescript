import React, { useReducer } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";

import { AppContainer } from "./styles";
import { counterReducer } from "./counterReducer";
function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <AppContainer>
      <Column text='To DO'>
        <Card text='Generate app sccaffold' />
      </Column>

      <Column text='Typescript'>
        <Card text='Learn Typescript' />
      </Column>
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
      <p> Count: {state.count} </p>
      <button onClick={() => dispatch({ type: "decrement" })}>- </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </AppContainer>
  );
}

export default App;
