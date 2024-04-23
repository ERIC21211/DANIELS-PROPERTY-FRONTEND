import "./App.css";
import NavBar from "./components/NavBar";
import propertyCard from "/workspaces/DANIELS-PROPERTY-FRONTEND/src/components/propertyCard.tsx";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto flex-col items-center align-middle justify-center  h-full w-full">
        <propertyCard />
      </div>
    </div>
  );
};

export default App;
