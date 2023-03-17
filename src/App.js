import { Button, Card, Divider } from 'ui-neumorphism';
import './App.css';
import LeftPart from './components/LeftPart';
import ProfileSummary from './components/ProfileSummary';
import RightPart from './components/RightPart';
function App() {
  return (
    <div className="App">
      <ProfileSummary/>
      <Divider/>
      <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-evenly",position:"relative"}}>
        <LeftPart  />
        <div className='right-child'>
          <RightPart/>
        </div>
      </div>
    </div>
  );
}

export default App;
