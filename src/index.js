import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { books } from './books';
import Book from './Book'


function BookList(){

  return (
    <>
      <h1>Amazon Best Sellers</h1>
    <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}




// const Image = () => (

// );

// const Title = () => {
//   //alternate version of function notataion with return
//   return <h2>Little Daymond Learns to Earn</h2>;
// };

// const Author = () => {
//    const inlineHeadingStyles = {
//      color: '#617d98',
//      fontSize: '.75rem',
//      marginTop:'.5rem'}
//    return (
//      <h4 style={inlineHeadingStyles}>Daymond John</h4> //alternate version for inline = <h4 style={{'color: '#617d98', marginTop:'.5rem'}}></h4>
// );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
