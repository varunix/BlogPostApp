import './App.css';
import Header from "./MyComponents/Header";
import {Body} from "./MyComponents/Body";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
    <Header title="Blog Post" searchBar={false}/>
    <Body/>
    <Footer/>
    </>
  );
}

export default App;
