import React from "react";

const Card = ({ anime }) => {
  const formatDate = (date) => {
    let [yy, mm, dd] = date.split("-"); //splits old date based off -
    return [dd, mm, yy].join("/");
  };
  const addFavorite = () => {
    let storedData = window.localStorage.animes
      ? window.localStorage.animes.split(",")
      : [];

      if(!storedData.includes(anime.id.toString())){
        storedData.push(anime.id)
        window.localStorage.animes = storedData;
        console.log(window.localStorage.animes)
      }
  
  };

  return (
    <div className="card">
      <img
        src={
          anime.attributes.posterImage.medium
            ? anime.attributes.posterImage.medium
            : "./img/noPoster.jpg"
        }
        alt="poster"
      />
      <h2>{anime.attributes.canonicalTitle}</h2>
      {anime.attributes.startDate ? (
        <h5>Released: {formatDate(anime.attributes.startDate)} </h5>
      ) : (
        ""
      )}
      {<h4>Rating: {anime.attributes.averageRating}%</h4>}
      {anime.attributes.youtubeVideoId ? (
        <h5>
          Trailer:{" "}
          <a
            href={
              "https://www.youtube.com/watch?v=" +
              anime.attributes.youtubeVideoId
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch
          </a>
        </h5>
      ) : (
        ""
      )}
      {anime.attributes.description ? <h3>Description</h3> : ""}
      <p>{anime.attributes.description}</p>

      <div className="btn" onClick={() => addFavorite()}>
        Add to Favorites
      </div>
    </div>
  );
};

export default Card;
