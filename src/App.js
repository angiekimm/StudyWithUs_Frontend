import "./App.css";
import { Header } from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./components/pageConent/HomePages";
import Footer from "./components/home/Footer";
import MyInfo from "./components/pages/myInfo/MyInfo";
import MyStudyPages from "./components/pageConent/MyStudyPages";
import Login from "./components/pages/account/Login";
import Findpw from "./components/pages/account/Findpw";
import Signup from "./components/pages/account/Signup";
import Board from "./components/pages/board/Board";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/myinfo" exact component={MyInfo} />
          <Route path="/mystudy" exact component={MyStudyPages} />
          <Route path="/account/login" exact component={Login} />
          <Route path="/account/findpw" exact component={Findpw} />
          <Route path="/account/signup" exact component={Signup} />
          <Route path="/board" exact component={Board} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
