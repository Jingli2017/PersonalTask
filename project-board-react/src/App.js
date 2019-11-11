import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProjectBoard from "./components/ProjectBoard";
import { BrowserRouter, Route } from "react-router-dom";
import AddProjectTask from "./components/projectTask/AddProjectTask";
import { Provider } from "react-redux";
import returnStoreAndPersistor from "./store";
import { PersistGate } from "redux-persist/integration/react";
import UpdateProjectTask from "./components/projectTask/UpdateProjectTask";

function App() {
  const { store, persistor } = returnStoreAndPersistor();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
            <Route path="/projectTask/:id" component={UpdateProjectTask} />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
