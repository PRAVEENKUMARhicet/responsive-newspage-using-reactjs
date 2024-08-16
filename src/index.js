import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';
import Newsgrid from './components/newsgrid';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function NewsPage(){
  return(
    <div>
      <Menu/>
      <Newsgrid/>
      <Content/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<NewsPage/>,document.getElementById('root'));