import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-off-white">
      <div className="w-1/6 h-full bg-dark-grey">
      <Sidebar/>
      </div>
      <div className="w-5/6 flex flex-col ">
        <div className='h-1/6'>topbar</div>
        <div className="h-3/6 flex gap-2">
          <div className="h-full w-1/5 bg-white">
          </div>
          <div className="h-full w-4/5 bg-white">
          </div>
        </div>
        <div className="h-2/6 bg-white">
          {/* Bottom content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;
