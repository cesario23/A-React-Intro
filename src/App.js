import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
function App() {
  return (
    <div>
      <Header />
      <div style={{display:"flex"}}>
      <Sidebar />
      <Body />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
