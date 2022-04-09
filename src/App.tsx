import React from "react";
import { MantineProvider } from "@mantine/core";
import { Navigation } from "./components/navbar/Navigation";
import Home from "./pages/Home";
import {TestingPage} from "./pages/testingPage";
function App() {
  return (
   <div>
     <TestingPage></TestingPage>
   </div>
  );
}

export default App;
