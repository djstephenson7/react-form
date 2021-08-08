import './App.css';
import React, { useEffect, useState } from 'react';

import Tabs from './components/Tabs';
import SignupForm from './components/SignupForm';
import PrivacyForm from './components/PrivacyForm';
import Confirmation from './components/Confirmation';

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    currentTab > 1 && console.log(finalData);
  }, [finalData, currentTab]);

  const handlSignupPress = (data) => {
    setFinalData({ ...finalData, ...data });
    setCurrentTab(currentTab + 1);
  };

  return (
    <div className="App">
      <Tabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        firstTab={<SignupForm getData={handlSignupPress} />}
        secondTab={<PrivacyForm getData={handlSignupPress} />}
        thirdTab={<Confirmation />}
      />
    </div>
  );
};

export default App;
