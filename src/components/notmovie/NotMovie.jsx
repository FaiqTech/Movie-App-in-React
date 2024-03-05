import "./NotMovie.css";

const NotMovie = () => {
  return (
    <div className="not-movie-container">
      <h2 className="not-movie-heading">No Movies Found</h2>
      <p className="not-movie-description">
        Sorry, we couldn't find any movies matching your search.
      </p>
    </div>
  );
};

export default NotMovie;
