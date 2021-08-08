import React from 'react';

const Tabs = ({ currentTab, setCurrentTab, firstTab, secondTab, thirdTab }) => {
  const tabList = [
    { index: 0, label: 'User', content: firstTab },
    { index: 1, label: 'Privacy', content: secondTab },
    { index: 2, label: 'Done', content: thirdTab },
  ];

  const handleTabClick = (tab) => tab < currentTab && setCurrentTab(tab);

  return (
    <div className="simple-tabs">
      <div className="tabs">
        {tabList.map((tab, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(tab.index)}
            className={tab.index === currentTab ? 'tab-active' : 'tab-inactive'}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabList.map(
        (tab, i) => tab.index === currentTab && <div key={i}>{tab.content}</div>
      )}
    </div>
  );
};

export default Tabs;
