import React from "react";

const ExploreLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Our Services</h1>
      {children}
    </div>
  );
};

export default ExploreLayout;
