import './App.css';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const THREE_DAYS_IN_MS = 1 * 1 * 1 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">
      <header className="App-header">
       <h1>Countdown Timer</h1>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </header>
    </div>
  );
}

export default App;
