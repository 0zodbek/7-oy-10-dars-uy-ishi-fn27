// // import React from 'react'

// // function Home() {
// //   return (
// //     <div className="flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-blue-50">
// //      <audio>
// //           <source
// //             src="https://dl2.mp3party.net/online/11115321.mp3"
// //             type="audio/mpeg"
// //           />
// //         </audio>
// //     </div>
// //   )
// // }

// // export default Home

// import React, { useState } from "react";

// // Track komponenti (har bir trek uchun)
// const Track = ({ track, isPlaying, onPlayPause }) => (
//   <div className="flex items-center w-full justify-between p-3 border-b border-gray-800">
//     <img
//       src={track.cover || "https://via.placeholder.com/40"}
//       alt="Album Cover"
//       className="w-10 h-10 rounded"
//     />
//     <div className="flex-1 ml-3">
//       <div className="text-white text-sm font-medium">{track.title}</div>
//       <div className="text-gray-400 text-xs">{track.artist}</div>
//     </div>
//     <div className="text-gray-400 text-xs">{track.duration}</div>
//     <button
//       className="text-green-500 hover:text-green-400 ml-3"
//       onClick={() => onPlayPause(track)}
//     >
//       {isPlaying ? "⏸️" : "▶️"}
//     </button>
//   </div>
// );

// // Playlist komponenti
// const Playlist = () => {
//   const [audio] = useState(new Audio());
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const tracks = [
//     {
//       title: "Same Old",
//       artist: "SHY Martin",
//       duration: "2:56",
//       cover: "https://via.placeholder.com/40",
//       url: "https://dl2.mp3party.net/online/11115321.mp3",
//     },
//     {
//       title: "A Moment Apart",
//       artist: "ODESZA",
//       duration: "3:54",
//       cover: "https://via.placeholder.com/40",
//       url: "https://dl2.mp3party.net/online/11115322.mp3",
//     },
//     // Boshqa treklar ham shu usulda qo'shilishi mumkin
//   ];

//   const playPauseTrack = (track) => {
//     // Agar yangi trek o'ynatmoqchi bo'lsak
//     if (currentTrack?.url !== track.url) {
//       audio.src = track.url;
//       audio.play();
//       setCurrentTrack(track);
//       setIsPlaying(true);
//     } else {
//       // Agar ayni trek o'ynayotgan bo'lsa, pauza qilamiz yoki davom ettiramiz
//       if (isPlaying) {
//         audio.pause();
//       } else {
//         audio.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="bg-gray-900 p-4 w-full max-w-md mx-auto rounded-lg shadow-lg">
//       <h1 className="text-white text-lg font-semibold mb-4">Spotify Playlist</h1>
//       {tracks.map((track, index) => (
//         <Track
//           key={index}
//           track={track}
//           isPlaying={currentTrack?.url === track.url && isPlaying}
//           onPlayPause={playPauseTrack}
//         />
//       ))}
//     </div>
//   );
// };

// export default Playlist;
import React, {useState, useEffect} from "react";
import http from "../axois";
function Home({ data }) {
  const [topMix, setTopMix] = useState([])
  const [forYou, setForYou] = useState([])
  const [played, setPlayed] = useState([])
  const [backIn, setBackIn] = useState([])
  const [yours, setYours] = useState([])
  useEffect(() => {
    http.get('categories/toplists/playlists')
    .then(response => {
      setTopMix(response.data.playlists.items);
      // console.log(response);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  useEffect(() => {
    http.get('categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
    .then(response => {
      setForYou(response.data.playlists.items);
      // console.log(response);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  useEffect(() => {
    http.get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
    .then(response => {
      setPlayed(response.data.playlists.items);
      // console.log(response);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  useEffect(() => {
    http.get('categories/0JQ5DAqbMKFLVaM30PMBm4/playlists')
    .then(response => {
      setBackIn(response.data.playlists.items);
      // console.log(response);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  useEffect(() => {
    http.get('categories/0JQ5DAqbMKFCbimwdOYlsl/playlists')
    .then(response => {
      setYours(response.data.playlists.items);
      // console.log(response);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  console.log(10, data);
 function handlechange(playlist){
  // playlist.preventDefault();
 console.log('change', playlist);
 
  }

  return (
<div className="bg-gray-900 min-h-screen text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Good afternoon</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {data.slice(0, 6).map((playlist, index) => (
          <div
            onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-700 transition duration-300"
          >
            <img
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className="w-16 h-16 rounded-md"
            />
            <span className="text-lg font-semibold">{playlist.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">Your top mixes</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {topMix.slice(0, 4).map((playlist, index) => (
          <div
          onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img
            width={250} height={250}
              src={playlist.images[0]?.url}
              alt={playlist.name}
              
            />
            <span className="text-sm font-medium text-center">{playlist.name}</span>
            {/* <span className="text-sm font-medium text-center">{playlist.description}</span> */}
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">MADE FOR YOU</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {forYou.slice(0, 4).map((playlist, index) => (
          <div
          onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img
            width={250} height={250}
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className="w-full h-40 rounded-md mb-2"
            />
            <span className="text-sm font-medium text-center">{playlist.name}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">RECENT PLAYED</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {played.slice(0, 4).map((playlist, index) => (
          <div
          onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img
            width={250} height={250}
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className="w-full h-40 rounded-md mb-2"
            />
            <span className="text-sm font-medium text-center">{playlist.name}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">JUMP BACK IN</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {backIn.slice(0, 4).map((playlist, index) => (
          <div
          onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img
            width={250} height={250}
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className="w-full h-40 rounded-md mb-2"
            />
            <span className="text-sm font-medium text-center">{playlist.name}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">UNIQUELY YOURS</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {yours.slice(0, 4).map((playlist, index) => (
          <div
          onClick={()=>{handlechange(playlist)}}
            key={index}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img
            width={250} height={250}
              src={playlist.images[0]?.url}
              alt={playlist.name}
              className="w-full h-40 rounded-md mb-2"
            />
            <span className="text-sm font-medium text-center">{playlist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
