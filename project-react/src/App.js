import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import { Provider } from "react-redux";
import returnStoreAndPersistor from "./store";
import { PersistGate } from "redux-persist/integration/react";
import UpdateProject from "./components/project/UpdateProject";

function App() {
  const { projectStore, persistor } = returnStoreAndPersistor();
  return (
    <Provider store={projectStore}>
      <PersistGate landing={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/project/:id" component={UpdateProject} />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
