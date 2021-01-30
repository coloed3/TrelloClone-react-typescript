import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";

import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text='To DO'>
        <Card text='Generate app sccaffold' />
      </Column>

      <Column text='Typescript'>
        <Card text='Learn Typescript' />
      </Column>
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
