import React from 'react';
import DataProvider from '../src/Context/DataProvider';
import Home from '../src/Component/Home';

function App() {
    return (
        <DataProvider>
            <Home />
        </DataProvider>
    );
}

export default App;
