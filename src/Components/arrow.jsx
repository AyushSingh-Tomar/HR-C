// import React from 'react';

// const BlueArrow = ({ 
//   width = 300, 
//   height = 100, 
//   color = 'blue',
//   text = 'Arrow Text',       
//   boxPoints = ['Point 1', 'Point 2', 'Point 3'] ,
//   deskheight = 200
// }) => {
//   return (
//     <div 
//       className="relative flex flex-col items-center justify-center gap-6" 
//       style={{ width, fontFamily: 'Poppins' }}
//     >
//       <div className="relative" style={{ width, height }}>
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           width={width} 
//           height={height} 
//           viewBox={`0 0 ${width} ${height}`}
//         >
//           <polygon 
//             points={`  
//               ${width * 0.1},0 
//               ${width * 0.9},0 
//               ${width},${height / 2} 
//               ${width * 0.9},${height} 
//               ${width * 0.1},${height} 
//               ${width * 0.2},${height / 2} 
//             `} 
//             fill={color} 
//             stroke="black"  // 🖤 Adds black outline  
//             strokeWidth="4"  // ✏️ Defines border thickness
//           />
//         </svg>

//         <div 
//           className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full text-black font-bold text-lg"
//           style={{ 
//             transform: 'translate(-50%, -50%)', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center',
//             pointerEvents: 'none',
//             fontFamily: 'Poppins'
//           }}
//         >
//           {text}
//         </div>
//       </div>

//       <div 
//         className="p-4 text-black font-bold text-lg"
//         style={{ 
//           width: width * 0.8, 
//           backgroundColor: color, 
//           borderRadius: '0 0 10px 10px', 
//           textAlign: 'left',
//           height: deskheight,
//           fontFamily: 'Poppins'
//         }}
//       >
//         <ul className="list-disc pl-6" style={{ fontFamily: 'Poppins' }}>
//           {boxPoints.map((point, index) => (
//             <li key={index} className="text-base font-normal" style={{ fontFamily: 'Poppins' }}>
//               {point}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BlueArrow;
import React from 'react';

const BlueArrow = ({ 
  width = 300, 
  height = 60,  // Reduced arrow height
  color = 'blue',
  text = 'Arrow Text',       
  boxPoints = ['Point 1', 'Point 2', 'Point 3'] ,
  deskheight = 200,  // Kept the box height unchanged
  flatTail = false  // New prop to toggle flat tail
}) => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-6" 
      style={{ width, fontFamily: 'Poppins' }}
    >
      <div className="relative" style={{ width, height }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
        >
          <polygon 
            points={flatTail 
              ? `${width * 0.1},0 ${width * 0.9},0 ${width},${height / 2} ${width * 0.9},${height} ${width * 0.1},${height} 0,${height} 0,0`
              : `${width * 0.1},0 ${width * 0.9},0 ${width},${height / 2} ${width * 0.9},${height} ${width * 0.1},${height} ${width * 0.2},${height / 2}`
            } 
            fill={color} 
            stroke="black"  
            strokeWidth="2"
          />
        </svg>

        <div 
          className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full text-black font-bold text-lg"
          style={{ 
            transform: 'translate(-50%, -50%)', 
            pointerEvents: 'none',
            fontFamily: 'Poppins'
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
          textAlign: 'left',
          height: deskheight,  // Kept unchanged
          fontFamily: 'Poppins'
        }}
      >
        <ul className="list-disc pl-6" style={{ fontFamily: 'Poppins' }}>
          {boxPoints.map((point, index) => (
            <li key={index} className="text-base font-normal" style={{ fontFamily: 'Poppins' }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlueArrow;


