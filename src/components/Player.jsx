import React from 'react';
import { formatTime } from '../as/formatTime';

export function Player({ 
  currentTrack, 
  isPlaying, 
  progress, 
  duration, 
  volume,
  isMuted,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
  onToggleMute 
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-gray-800">
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-green-500 transition-all duration-100"
          style={{ width: `${(progress / duration) * 100}%` }}
        />
      </div>

      <div className="p-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Left side - Track info */}
          <div className="flex items-center gap-4 w-1/3">
            <img
              src={currentTrack.album.images[2]?.url}
              alt={currentTrack.name}
              className="w-14 h-14"
            />
            <div>
              <div className="text-white font-medium hover:underline cursor-pointer">
                {currentTrack.name}
              </div>
              <div className="text-xs text-gray-400 hover:underline cursor-pointer">
                {currentTrack.artists.map(artist => artist.name).join(', ')}
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Center - Player controls */}
          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6">
              <button onClick={onPrevious} className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
              </button>
              <button 
                onClick={onPlayPause}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                  </svg>
                )}
              </button>
              <button onClick={onNext} className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
              <span>{formatTime(progress)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right side - Volume controls */}
          <div className="flex items-center justify-end gap-4 w-1/3">
            <button onClick={onToggleMute} className="text-gray-400 hover:text-white">
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={onVolumeChange}
              className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 