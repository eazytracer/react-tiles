import React from 'react'

// Represents a grid square with a color

export default function GridSquare(props) {
  const [isActive, setActive] = useState("false");

  const toggleSelection = () => {
    setActive(!isActive);
  };

  return <div className={`grid-square ${isActive ? "selected" : "unselected"}`} onClick={toggleSelection} />
}