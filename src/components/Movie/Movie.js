import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions';
import { Link } from 'react-router-dom';

import './Movie.css';
function mapStateToProps(state) {
    return {
      movies: state.movieDetail,
      arrMovies: state.moviesLoaded
    };
}

class Movie extends React.Component {
    arrId = (this.state) = this.props.arrMovies.map(el=>el.imdbID)
    getPosition=null;
    componentDidMount(){
        
        this.props.getMovieDetail(this.props.match.params.id)
    }

    handleClick = () => {
        
        this.props.getMovieDetail(this.props.match.params.id);
    };

    render() {
        this.getPosition= this.arrId.indexOf(this.props.match.params.id)
        this.nextPosition= this.getPosition=== this.arrId.length-1 ? 0 : this.getPosition +1
        this.prevPosition= this.getPosition=== 0 ? this.arrId.length-1 : this.getPosition -1
        
        return (

            <div className="movie-detail">
                <h1>Detalle de la pelicula: <br></br>
                     {this.props.moviesLoaded}</h1>
                <div>

                    <img src={this.props.movies.Poster} alt='Poster'></img>
                    <br></br>
                    {this.props.movies.Year}
                </div>
                <Link to={`/movie/${this.arrId[this.nextPosition]}`}>
                    <button onClick={this.handleClick}>Prev </button>
                </Link>

                <Link to={`/movie/${this.arrId[this.prevPosition]}`}>
                    <button onClick={this.handleClick}>Next </button> 
                </Link>
            </div>
        );
    }
}



export default connect(
    mapStateToProps,
    {getMovieDetail}
  )(Movie);
