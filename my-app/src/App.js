import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

const lastDateSeenBoss = () => {
    const storedDate = localStorage.getItem('lastDateSeenBoss');
    return storedDate ? new Date(storedDate) : new Date();
};

function App() {

    const [lastSeenBoss, setLastDateBoss] = useState(lastDateSeenBoss());

    useEffect(() => {
        localStorage.setItem('lastDateSeenBoss', lastSeenBoss.toISOString());
    }, [lastSeenBoss]);

    const daysLastSeenBoss = () => {
        const currentDate = new Date();
        const timeDifference = currentDate - lastSeenBoss;
        return Math.round(timeDifference / (1000 * 3600 * 24));
    }

    return (
        <div className="App">
            <h1>
                {`Days I haven't seen my boss: ${daysLastSeenBoss()}`}
            </h1>
            <button onClick={() => setLastDateBoss(new Date())}
                    style={{
                        padding: "15px 30px",
                        fontSize: "18px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
            >
                I have seen my boss today
            </button>
        </div>
    );
}

export default App;
