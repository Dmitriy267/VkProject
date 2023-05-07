import React from 'react';
//import './App.css';
import "./styles.scss";
import {Routes, Route} from 'react-router-dom';
import MainPage  from './components/MainPage/MainPage';
import {RouteMainAvtorization} from './components/RouteMainAvtorization/RouteMainAvtorization';
import PageRegistration from './components/PageRegistration/PageRegistration';
import MyPage from './components/MyPage/MyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='Вход и регистрация' element={<RouteMainAvtorization/>}/>
        <Route path='Регистрация' element={<PageRegistration/>}/>
        <Route path='Страница пользователя' element={<MyPage/>}/>
         
         
      </Routes>
    </div>
  );
}

export default App;
