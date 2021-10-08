import React from 'react';
import './App.css';

import GridBoard from './components/GridBoard'

const [rows, cols] = [20, 20];

let setStartWidth = (rows, cols) => {
    document.documentElement.style.setProperty('--rows', rows);
    document.documentElement.style.setProperty('--cols', cols);

}

function App() {
    setStartWidth(rows, cols);
    return (
        <div className="App">
            <GridBoard rows={rows} cols={cols}/>
        </div>
    );
}

export default App;
