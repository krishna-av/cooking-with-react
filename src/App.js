import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
    const [theme,
        setTheme] = useState("green");
    return (
        <ThemeContext.Provider value={{
            backgroundColor: theme
        }}>
            Counter Component :
            <Counter initialCount={0}/>
            <br/><br/>
            Counter Hooks Component:
            <CounterHooks initialCount={0}/>
            <button
                onClick={() => setTheme(prevTheme => {
                return prevTheme === 'yellow'
                    ? 'gold'
                    : 'yellow'
            })}>
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}

export default App;