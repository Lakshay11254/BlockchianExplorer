import "./App.css";
import Navbar from "./components/Navbar";
import BlockDetails from "./components/BlockDetails";
import Transfer from "./components/Transfer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Transactions from "./components/Transactions";
function App() {
  return (
    <>
      <Navbar />
      {/* <BlockDetails/> */}
      <Switch>

        <Route path="/transactions" component={Transactions} />
        {/* <Transfer/> */}
        <Route path="/transfer" component={Transfer} />
        {/* <BlockDetails /> */}
        <Route path="/blocks" component={BlockDetails} />
        <Route path="/" component={BlockDetails} />
      </Switch>
    </>
  );
}

export default App;

//  <NavBar />
//  <Switch>
//    <Route path="/about" component={About} />
//    <Route path="/contact" component={Contact} />
//    <Route path="/" component={Home} />
//  </Switch>

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
