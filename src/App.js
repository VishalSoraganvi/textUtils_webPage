
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'


function App() {
  return (
    <>
     <Navbar />
    </>
  );
}

Navbar.propTypes = {
  title :PropTypes.string,
  home : PropTypes.string,
  about : PropTypes.string
}

Navbar.defaultProps = {
  title: "Enter Title",
  home : "Home",
  about: "About"  
}

export default App;
