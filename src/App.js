import NavBar from "./components/NavBar";
import PostMapper from "./components/PostMapper";
import CreatePost from "./components/CreatePost";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <CreatePost/>
     <PostMapper/>
    </div>
  );
}

export default App;
