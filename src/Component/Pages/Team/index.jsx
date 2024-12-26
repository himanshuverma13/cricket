// // import React from "react";
// // // import "./App.css";

// // const playersData = [
// //     {
// //         "name": "BATSMEN",
// //         "imageId": 174146
// //     },
// //     {
// //         "id": "1413",
// //         "name": "Virat Kohli",
// //         "imageId": 244980,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm medium"
// //     },
// //     {
// //         "id": "576",
// //         "name": "Rohit Sharma",
// //         "imageId": 244982,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "id": "1446",
// //         "name": "Shikhar Dhawan",
// //         "imageId": 170660,
// //         "battingStyle": "Left-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "id": "11808",
// //         "name": "Shubman Gill",
// //         "imageId": 171042,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "id": "9428",
// //         "name": "Shreyas Iyer",
// //         "imageId": 171024,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm legbreak"
// //     },
// //     {
// //         "id": "1836",
// //         "name": "Manish Pandey",
// //         "imageId": 171022,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm medium"
// //     },
// //     {
// //         "id": "2195",
// //         "name": "Mayank Agarwal",
// //         "imageId": 171091,
// //         "battingStyle": "Right-hand bat"
// //     },
// //     {
// //         "id": "12094",
// //         "name": "Prithvi Shaw",
// //         "imageId": 171030,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "id": "1448",
// //         "name": "Cheteshwar Pujara",
// //         "imageId": 153263,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm legbreak"
// //     },
// //     {
// //         "id": "1447",
// //         "name": "Ajinkya Rahane",
// //         "imageId": 171082,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm medium"
// //     },
// //     {
// //         "name": "ALL ROUNDER",
// //         "imageId": 174146
// //     },
// //     {
// //         "id": "9647",
// //         "name": "Hardik Pandya",
// //         "imageId": 244973,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast-medium"
// //     },
// //     {
// //         "id": "8424",
// //         "name": "Hanuma Vihari",
// //         "imageId": 171080,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "id": "587",
// //         "name": "Ravindra Jadeja",
// //         "imageId": 170670,
// //         "battingStyle": "Left-hand bat",
// //         "bowlingStyle": "Left-arm orthodox"
// //     },
// //     {
// //         "id": "1593",
// //         "name": "Ravichandran Ashwin",
// //         "imageId": 244976,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm offbreak"
// //     },
// //     {
// //         "name": "WICKET KEEPER",
// //         "imageId": 174146
// //     },
// //     {
// //         "id": "8733",
// //         "name": "KL Rahul",
// //         "imageId": 244975,
// //         "battingStyle": "Right-hand bat"
// //     },
// //     {
// //         "id": "8271",
// //         "name": "Sanju Samson",
// //         "imageId": 226289,
// //         "battingStyle": "Right-hand bat"
// //     },
// //     {
// //         "id": "1465",
// //         "name": "Wriddhiman Saha",
// //         "imageId": 171058,
// //         "battingStyle": "Right-hand bat"
// //     },
// //     {
// //         "id": "10744",
// //         "name": "Rishabh Pant",
// //         "imageId": 244978,
// //         "battingStyle": "Left-hand bat"
// //     },
// //     {
// //         "name": "BOWLER",
// //         "imageId": 174146
// //     },
// //     {
// //         "id": "7909",
// //         "name": "Mohammed Shami",
// //         "imageId": 244977,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast-medium"
// //     },
// //     {
// //         "id": "9311",
// //         "name": "Jasprit Bumrah",
// //         "imageId": 170685,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast"
// //     },
// //     {
// //         "id": "8292",
// //         "name": "Kuldeep Yadav",
// //         "imageId": 170683,
// //         "battingStyle": "Left-hand bat",
// //         "bowlingStyle": "Left-arm chinaman"
// //     },
// //     {
// //         "id": "7910",
// //         "name": "Yuzvendra Chahal",
// //         "imageId": 244981,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm legbreak"
// //     },
// //     {
// //         "id": "9715",
// //         "name": "Navdeep Saini",
// //         "imageId": 226400,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast"
// //     },
// //     {
// //         "id": "8683",
// //         "name": "Shardul Thakur",
// //         "imageId": 226224,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast-medium"
// //     },
// //     {
// //         "id": "1858",
// //         "name": "Umesh Yadav",
// //         "imageId": 153874,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast"
// //     },
// //     {
// //         "id": "10808",
// //         "name": "Mohammed Siraj",
// //         "imageId": 171039,
// //         "battingStyle": "Right-hand bat",
// //         "bowlingStyle": "Right-arm fast-medium"
// //     }
// // ];

// // const batsmen = playersData.filter(player => player.battingStyle && !player.bowlingStyle);
// // const allRounders = playersData.filter(player => player.bowlingStyle);
// // const wicketKeepers = playersData.filter(player => player.name === "WICKET KEEPER").concat(playersData.filter(player => player.battingStyle && !player.bowlingStyle && player.name !== "WICKET KEEPER"));
// // const bowlers = playersData.filter(player => player.bowlingStyle && !player.battingStyle);



// // const PlayerList = ({ title, players }) => (
// //   <div className="mb-4">
// //     <h5 className="bg-light p-2">{title}</h5>
// //     <div className="row">
// //       {playersData.map((player, index) => (
// //         <div className="col-md-6 mb-3" key={index}>
// //           <div className="d-flex align-items-center border p-2">
// //             <img
// //               src={player.image}
// //               alt={player.name}
// //               className="rounded-circle me-3"
// //               style={{ width: "50px", height: "50px", objectFit: "cover" }}
// //             />
// //             <span>{player.name}</span>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // function Team() {
// //   return (
// //     // <div className="container mt-4">
// //     //   <PlayerList title="BATSMEN" players={playersData?.batsmen} />
// //     //   <PlayerList title="allRounders" players={playersData?.allRounders} />
// //     //   <PlayerList title="wicketKeepers" players={playersData?.wicketKeepers} />
// //     //   <PlayerList title="bowlers" players={playersData?.bowlers} />
// //     // </div>
// //     <div>
// //     <h1>Cricket Players</h1>
    
// //     <h2>Batsmen</h2>
// //     <ul>
// //         {batsmen.map(player => (
// //             <li key={player.id || player.name}>
// //                 {player.name} - {player.battingStyle}
// //             </li>
// //         ))}
// //     </ul>

// //     <h2>All Rounders</h2>
// //     <ul>
// //         {allRounders.map(player => (
// //             <li key={player.id}>
// //                 {player.name} - {player.battingStyle}, {player.bowlingStyle}
// //             </li>
// //         ))}
// //     </ul>
    
// //     <h2>Wicket Keepers</h2>
// //     <ul>
// //         {wicketKeepers.map(player => (
// //             <li key={player.id}>
// //                 {player.name} - {player.battingStyle}
// //             </li>
// //         ))}
// //     </ul>

// //     <h2>Bowler</h2>
// //     <ul>
// //         {bowlers.map(player => (
// //             <li key={player.id}>
// //                 {player.name} - {player.battingStyle}, {player.bowlingStyle}
// //             </li>
// //         ))}
// //     </ul>
// // </div>
// //   );
// // }

// // export default Team;
// // .

// import React from 'react';

// const playersData = [
//     {
//         "name": "BATSMEN",
//         "imageId": 174146
//     },
//     {
//         "id": "1413",
//         "name": "Virat Kohli",
//         "imageId": 244980,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm medium"
//     },
//     {
//         "id": "576",
//         "name": "Rohit Sharma",
//         "imageId": 244982,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "id": "1446",
//         "name": "Shikhar Dhawan",
//         "imageId": 170660,
//         "battingStyle": "Left-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "id": "11808",
//         "name": "Shubman Gill",
//         "imageId": 171042,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "id": "9428",
//         "name": "Shreyas Iyer",
//         "imageId": 171024,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm legbreak"
//     },
//     {
//         "id": "1836",
//         "name": "Manish Pandey",
//         "imageId": 171022,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm medium"
//     },
//     {
//         "id": "2195",
//         "name": "Mayank Agarwal",
//         "imageId": 171091,
//         "battingStyle": "Right-hand bat"
//     },
//     {
//         "id": "12094",
//         "name": "Prithvi Shaw",
//         "imageId": 171030,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "id": "1448",
//         "name": "Cheteshwar Pujara",
//         "imageId": 153263,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm legbreak"
//     },
//     {
//         "id": "1447",
//         "name": "Ajinkya Rahane",
//         "imageId": 171082,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm medium"
//     },
//     {
//         "name": "ALL ROUNDER",
//         "imageId": 174146
//     },
//     {
//         "id": "9647",
//         "name": "Hardik Pandya",
//         "imageId": 244973,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast-medium"
//     },
//     {
//         "id": "8424",
//         "name": "Hanuma Vihari",
//         "imageId": 171080,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "id": "587",
//         "name": "Ravindra Jadeja",
//         "imageId": 170670,
//         "battingStyle": "Left-hand bat",
//         "bowlingStyle": "Left-arm orthodox"
//     },
//     {
//         "id": "1593",
//         "name": "Ravichandran Ashwin",
//         "imageId": 244976,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm offbreak"
//     },
//     {
//         "name": "WICKET KEEPER",
//         "imageId": 174146
//     },
//     {
//         "id": "8733",
//         "name": "KL Rahul",
//         "imageId": 244975,
//         "battingStyle": "Right-hand bat"
//     },
//     {
//         "id": "8271",
//         "name": "Sanju Samson",
//         "imageId": 226289,
//         "battingStyle": "Right-hand bat"
//     },
//     {
//         "id": "1465",
//         "name": "Wriddhiman Saha",
//         "imageId": 171058,
//         "battingStyle": "Right-hand bat"
//     },
//     {
//         "id": "10744",
//         "name": "Rishabh Pant",
//         "imageId": 244978,
//         "battingStyle": "Left-hand bat"
//     },
//     {
//         "name": "BOWLER",
//         "imageId": 174146
//     },
//     {
//         "id": "7909",
//         "name": "Mohammed Shami",
//         "imageId": 244977,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast-medium"
//     },
//     {
//         "id": "9311",
//         "name": "Jasprit Bumrah",
//         "imageId": 170685,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast"
//     },
//     {
//         "id": "8292",
//         "name": "Kuldeep Yadav",
//         "imageId": 170683,
//         "battingStyle": "Left-hand bat",
//         "bowlingStyle": "Left-arm chinaman"
//     },
//     {
//         "id": "7910",
//         "name": "Yuzvendra Chahal",
//         "imageId": 244981,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm legbreak"
//     },
//     {
//         "id": "9715",
//         "name": "Navdeep Saini",
//         "imageId": 226400,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast"
//     },
//     {
//         "id": "8683",
//         "name": "Shardul Thakur",
//         "imageId": 226224,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast-medium"
//     },
//     {
//         "id": "1858",
//         "name": "Umesh Yadav",
//         "imageId": 153874,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast"
//     },
//     {
//         "id": "10808",
//         "name": "Mohammed Siraj",
//         "imageId": 171039,
//         "battingStyle": "Right-hand bat",
//         "bowlingStyle": "Right-arm fast-medium"
//     }
// ];

// const Team = () => {
//     const batsmen = playersData.filter(player => player.battingStyle && !player.bowlingStyle);
//     const allRounders = playersData.filter(player => player.bowlingStyle);
//     const wicketKeepers = playersData.filter(player => player.name === "WICKET KEEPER").concat(playersData.filter(player => player.battingStyle && !player.bowlingStyle && player.name !== "WICKET KEEPER"));
//     const bowlers = playersData.filter(player => player.bowlingStyle && !player.battingStyle);
    
//     return (
//         <div>
//             <h1>Cricket Players</h1>
            
//             <h2>Batsmen</h2>
//             <ul>
//                 {batsmen.map(player => (
//                     <li key={player.id || player.name}>
//                         {player.name} - {player.battingStyle}
//                     </li>
//                 ))}
//             </ul>

//             <h2>All Rounders</h2>
//             <ul>
//                 {allRounders.map(player => (
//                     <li key={player.id}>
//                         {player.name} - {player.battingStyle}, {player.bowlingStyle}
//                     </li>
//                 ))}
//             </ul>
            
//             <h2>Wicket Keepers</h2>
//             <ul>
//                 {wicketKeepers.map(player => (
//                     <li key={player.id}>
//                         {player.name} - {player.battingStyle}
//                     </li>
//                 ))}
//             </ul>

//             <h2>Bowler</h2>
//             <ul>
//                 {bowlers.map(player => (
//                     <li key={player.id}>
//                         {player.name} - {player.battingStyle}, {player.bowlingStyle}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Team;
import React from "react";

// Sample data
const playersData = [
  { name: "BATSMEN", imageId: 174146 },
  { id: "1413", name: "Virat Kohli", imageId: 244980, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
  { id: "576", name: "Rohit Sharma", imageId: 244982, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm offbreak" },
  { id: "1446", name: "Shikhar Dhawan", imageId: 170660, battingStyle: "Left-hand bat", bowlingStyle: "Right-arm offbreak" },
  { id: "11808", name: "Shubman Gill", imageId: 171042, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm offbreak" },
  { id: "9428", name: "Shreyas Iyer", imageId: 171024, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm legbreak" },
  { id: "1836", name: "Manish Pandey", imageId: 171022, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
  { id: "2195", name: "Mayank Agarwal", imageId: 171091, battingStyle: "Right-hand bat" },
  { id: "12094", name: "Prithvi Shaw", imageId: 171030, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm offbreak" },
  { id: "1448", name: "Cheteshwar Pujara", imageId: 153263, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm legbreak" },
  { id: "1447", name: "Ajinkya Rahane", imageId: 171082, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
  { name: "ALL ROUNDER", imageId: 174146 },
  { id: "9647", name: "Hardik Pandya", imageId: 244973, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium" },
  { id: "8424", name: "Hanuma Vihari", imageId: 171080, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm offbreak" },
  { id: "587", name: "Ravindra Jadeja", imageId: 170670, battingStyle: "Left-hand bat", bowlingStyle: "Left-arm orthodox" },
  { id: "1593", name: "Ravichandran Ashwin", imageId: 244976, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm offbreak" },
  { name: "WICKET KEEPER", imageId: 174146 },
  { id: "8733", name: "KL Rahul", imageId: 244975, battingStyle: "Right-hand bat" },
  { id: "8271", name: "Sanju Samson", imageId: 226289, battingStyle: "Right-hand bat" },
  { id: "1465", name: "Wriddhiman Saha", imageId: 171058, battingStyle: "Right-hand bat" },
  { id: "10744", name: "Rishabh Pant", imageId: 244978, battingStyle: "Left-hand bat" },
  { name: "BOWLER", imageId: 174146 },
  { id: "7909", name: "Mohammed Shami", imageId: 244977, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium" },
  { id: "9311", name: "Jasprit Bumrah", imageId: 170685, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast" },
  { id: "8292", name: "Kuldeep Yadav", imageId: 170683, battingStyle: "Left-hand bat", bowlingStyle: "Left-arm chinaman" },
  { id: "7910", name: "Yuzvendra Chahal", imageId: 244981, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm legbreak" },
  { id: "9715", name: "Navdeep Saini", imageId: 226400, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast" },
  { id: "8683", name: "Shardul Thakur", imageId: 226224, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium" },
  { id: "1858", name: "Umesh Yadav", imageId: 153874, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast" },
  { id: "10808", name: "Mohammed Siraj", imageId: 171039, battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium" },
];

const Team = () => {
  return (
    <div>
      {playersData.map((item, index) =>
        item.id ? (
          <div key={item.id} style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
            <img
              src={`https://example.com/images/${item.imageId}`}
              alt={item.name}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <div>
              <h4>{item.name}</h4>
              <p>Batting Style: {item.battingStyle}</p>
              {item.bowlingStyle && <p>Bowling Style: {item.bowlingStyle}</p>}
            </div>
          </div>
        ) : (
          <h2 key={index} style={{ marginTop: "20px", color: "#2c3e50" }}>
            {item.name}
          </h2>
        )
      )}
    </div>
  );
};

export default Team;
