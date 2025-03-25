
import React from 'react';

const BlueArrow = ({ 
  width = 300, 
  height = 100, 
  color = 'blue',
  text = 'Arrow Text',       
  boxPoints = ['Point 1', 'Point 2', 'Point 3'] ,
  deskheight=200
}) => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-6" 
      style={{ width }}
    >

      <div className="relative" style={{ width, height }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
        >
          <polygon 
            points={`
              ${width * 0.1},0 
              ${width * 0.9},0 
              ${width},${height / 2} 
              ${width * 0.9},${height} 
              ${width * 0.1},${height} 
              ${width * 0.2},${height / 2} 
            `} 
            fill={color} 
          />
        </svg>
        

        <div 
          className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full text-black font-bold text-lg"
          style={{ 
            transform: 'translate(-50%, -50%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            pointerEvents: 'none' 
          }}
        >
          {text}
        </div>
      </div>

      <div 
        className="p-4 text-black font-bold text-lg"
        style={{ 
          width: width * 0.8, 
          backgroundColor: color, 
          borderRadius: '0 0 10px 10px', 
          textAlign: 'left' ,
          height:deskheight
        }}
      >
        <ul className="list-disc pl-6">
          {boxPoints.map((point, index) => (
            <li key={index} className="text-base font-normal">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlueArrow;



