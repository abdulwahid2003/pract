import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import myActions from './redux/myActions'

function App({active}) {
  return (
    <div className="App">
     <h1>Hello{active}</h1>
    </div>
  );
}

const mapStateTopProps=(state)=>(
{
  active:state.user.active
})
const mapStateToDispatch=(dispatch)=>({dispatch})

export default connect(mapStateTopProps,mapStateToDispatch)(App)