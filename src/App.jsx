import "./App.css";
import Navbar from "./components/Navbar";
import BlockDetails from "./components/BlockDetails";
import Transfer from "./components/Transfer";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Transfer/>
      <BlockDetails />
    </>
  );
 }

 export default App;

// App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Transactions from "./components/Transactions";
// import Transfer from "./components/Transfer";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <BlockDetails/>
//         <Switch>
//           <Route path="/" exact component={Transactions} />
//           <Route path="/transfer" component={Transfer} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
