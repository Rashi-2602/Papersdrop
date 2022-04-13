import React from 'react';
import { BrowserRouter as Router, Routes,Route,Switch} from "react-router-dom";
import Create from './component/create';
import Update from './component/update';
import Delete from './component/delete';
import Read from './component/read';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/create" component={Create} />
    //     <Route path="/read" component={<Read/>} />
    //     <Route path="/update" component={Update} />
    //     <Route path="/delete" component={Delete} />
    //   </Routes>
    // </Router>
    <div>
      <Read/>
      <Create/>
      <Update/>
      <Delete/>
    </div>
  );
}

export default App;
