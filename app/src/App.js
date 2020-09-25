import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import "./App.css";


// export default function App() {
const App = (props) => {

  console.log('ko: ap.js: App: props: ', props)
  useEffect(() => {
    // this code will run onceho 
    // axios.get
    props.fetchData();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="kanye-card">
      <h1>Gain Wisdom</h1>
      {props.is_loading_data ? (
        <div>**fetching quote**</div>
      ) : props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : (
        <>
          <div className="kanye-container">"{props.kanye_data.quote}"</div>
        </>
      )}
      <img className="kanyeimg" src="https://media.foxbusiness.com/BrightCove/854081161001/202001/865/854081161001_6127869979001_6127874242001-vs.jpg"></img>
      <button onClick={refreshPage}>More Wisdown</button>
      </div> 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kanye_data: state.kanye_data,
    is_loading_data: state.is_loading_data,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchData })(App);