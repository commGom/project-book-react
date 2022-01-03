import logo from './logo.svg';
import './App.css';
import Signin from './components/user/Signin';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Book from './components/book/Book';
import UserUpdate from './components/mypage/UserUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route path="*"></Route>
          </Route>
          <Route path="/user/signin" element={<Signin></Signin>}></Route>
          <Route path="/book" element={<Book></Book>}></Route>
          <Route path="/user/update" element={<UserUpdate></UserUpdate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;