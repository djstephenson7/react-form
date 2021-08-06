import React, { useState } from 'react';

const Tabs = ({ firstTab, secondTab, thirdTab }) => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'User',
      content: firstTab,
    },
    {
      name: 'tab2',
      label: 'Privacy',
      content: secondTab,
    },
    {
      name: 'tab3',
      label: 'Done',
      content: thirdTab,
    },
  ];

  return (
    <div className="simple-tabs">
      <div className="tabs">
        {tabList.map((tab, i) => (
          <button
            key={i}
            onClick={() => setCurrentTab(tab.name)}
            className={tab.name === currentTab ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabList.map(
        (tab, i) => tab.name === currentTab && <div key={i}>{tab.content}</div>
      )}
    </div>
  );
};

export default Tabs;
