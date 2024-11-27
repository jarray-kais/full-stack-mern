import { useState } from "react";

const TabsComponent = ({ item }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="tab-headers">
        {item?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-header ${activeTab === index ? "active" : ""}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div>
        <p className="tabContent">{item[activeTab]?.content}</p>
      </div>
    </>
  );
};

export default TabsComponent;
