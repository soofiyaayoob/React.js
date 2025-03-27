import Header from "./header";
import Footer from "./Footer";
import Food from "./food";
import Card from "./card";
import Student from "./Student";
function App() {
 return(
  <>
  <Header/>
  <Footer/>
  <Food/>
  <Card/>
  <Student name="soofiya"  age={20} isStudent={true}/>
  </>

 );
}

export default App
