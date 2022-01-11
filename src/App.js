import logo from './logo.svg';
import './App.css';
import Users from "./Components/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
function App() {
  return (
      <div className={'wrap'}>
          <Comments/>
        <Users />
        <Posts/>

      </div>

  );
}

export default App;
