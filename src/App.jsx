import './App.css';

import Tabs from './components/Tabs';
import SignupForm from './components/SignupForm';
import PrivacyForm from './components/PrivacyForm';
import Confirmation from './components/Confirmation';

const App = () => {
  let finalData;

  const getDetails = (data) => {
    finalData = { ...finalData, ...data };
  };

  return (
    <div className="App">
      <div style={{ height: 500, width: 500, border: '1px solid black' }}>
        <Tabs
          firstTab={<SignupForm getData={getDetails} />}
          secondTab={<PrivacyForm getData={getDetails} />}
          thirdTab={<Confirmation />}
        />
      </div>
    </div>
  );
};

export default App;
