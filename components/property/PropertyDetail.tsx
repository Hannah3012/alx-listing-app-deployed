import React from "react";

type Property = {
  id: string;
  name: string;
  description: string;
};

type PropertyDetailProps = {
  property: Property;
};

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return <div>Property Detail</div>;
};

export default PropertyDetail;
