import { useAppContext } from "../hooks/useAppContext";
import "../styles/styles.css";

function App() {
  const { state } = useAppContext();

  console.log(state);
  return (
    <div>
      A book tracker application built with React, TypeScript, Tailwind CSS, and
      React Router, featuring centralized state management using the Context API
      and useReducer.
    </div>
  );
}

export default App;
