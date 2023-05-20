function MovieDetail({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image}></img>
      <h1>Title :{movie.title}</h1>
      <h2>Rating : {movie.rating}</h2>
      <h3>description : {movie.description_full}</h3>
      <h4>genres : {movie.genres}</h4>
      <h5>date : {movie.date_uploaded}</h5>
    </div>
  );
}

export default MovieDetail;
