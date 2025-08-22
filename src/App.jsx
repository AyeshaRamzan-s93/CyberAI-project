
import HelloWorld from "./HelloWorld";

import UserCard from "./UserCard";

import MyButton from "./Button";

import Footer from "./Footer";

function App() {
  return (

    <div>
      <HelloWorld />
      <UserCard/>
      <MyButton/>
      <Footer/>
    </div>

  );
}

export default App;













// HelloWorld.jsx → defines a component, exported.

// App.jsx → imports HelloWorld, renders it, exports App.

// main.jsx → imports App, tells ReactDOM to render <App />.