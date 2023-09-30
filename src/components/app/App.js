import Wrapper from '../wrapper/Wrapper';
import Introduction from '../introduction/Introduction';
import Team from '../team/Team';
import Service from '../sevices/Service';
import Empty from '../empty/Empty';
import Project from '../projects/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper></Wrapper>
      <Service></Service>
      <Project></Project>
      <Team></Team>
      <Empty></Empty>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
