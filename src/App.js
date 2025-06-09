import './App.css'


import Sidebar from './components/Sidebar/sidebar';
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/Rightside/Rightside';
function App(){
return(
  <div className="App">
   <div className='AppGlass'>
  <Sidebar />
  <MainDash/>
  <Rightside/>
   </div>

  </div>
);
}
export default App;