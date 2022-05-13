import "./App.css";
import { Header } from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePages from "./components/pageConent/HomePages";
import Footer from "./components/home/Footer";
import MyInfo from "./components/pages/myInfo/MyInfo";
import MyStudyPages from "./components/pageConent/MyStudyPages";
import Login from "./components/pages/account/Login";
import Findpw from "./components/pages/account/Findpw";
import Signup from "./components/pages/account/Signup";
import Board from "./components/pages/board/Board";
import MyPointPages from "./components/pageConent/MyPointPages";
import CreateStudy from "./components/pages/studyGroup/CreateStudy";
import StudyDetail from "./components/pages/studyGroup/StudyDetail";
import Chat from "./components/chat/Chat";
import AdminRefund from "./components/pages/admin/AdminRefund";
import AdminStudy from "./components/pages/admin/AdminStudy";
import AdminUser from "./components/pages/admin/AdminUser";
import FindID from "./components/pages/account/FindID";
import Studyroom from "./components/pages/studyroom/Studyroom";
import BoardDetail from "./components/pages/board/BoardDetail";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/myinfo" exact component={MyInfo} />
          <Route path="/mystudy" exact component={MyStudyPages} />
          <Route path="/account/login" exact component={Login} />
          <Route path="/account/findpw" exact component={Findpw} />
          <Route path="/account/findid" exact component={FindID} />
          <Route path="/account/signup" exact component={Signup} />
          <Route path="/board" exact component={Board} />
          <Route path="/board/detail" exact component={BoardDetail} />
          <Route path="/mypoint" exact component={MyPointPages} />
          <Route path="/study/create" exact component={CreateStudy} />
          <Route path="/study/detail" exact component={StudyDetail} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/admin/refund" exact component={AdminRefund} />
          <Route path="/admin/user" exact component={AdminUser} />
          <Route path="/admin/study" exact component={AdminStudy} />
          <Route path="/studyroom" exact component={Studyroom} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
