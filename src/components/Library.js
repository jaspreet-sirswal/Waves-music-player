import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setcurrentSong,
  audioRef,
  isPlaying,
  setsongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setcurrentSong={setcurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setsongs={setsongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
