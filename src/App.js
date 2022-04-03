import './App.css';
import Pages from './pages';

function App() {


  // window.onbeforeunload = () => {
  //   localStorage.clear();
  // }

  // window.addEventListener("beforeunload", () => localStorage.clear());

  return (
    <div>
      <Pages />
    </div>
  );
}

export default App
