import Header from "./header";
import Footer from "./Footer";
import Food from "./food";
import Card from "./card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
function App() {
 return(
  <>
  <Header/>
  <Footer/>
  <Food/>
  <Card/>
  <Student name="soofiya"  age={20} isStudent={true}/>
  <UserGreeting isLogged={false} username="Soofiya" />

  </>

 );
}

export default App
