import React from 'react';
import { Card } from './Card';
import { Column } from './Column';

import { AppContainer, ColumnTitle} from './styles'


function App() {
 
  return (
    <AppContainer>
      
       <Column text="To DO">
         <Card text="Generate app sccaffold"/>
       </Column>

        <Column text="Typescript"> 
            <Card text="Learn Typescript"/>
        </Column>
    </AppContainer>
  );
}

export default App;
