import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movies";

export class Movies extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Fragment>
        <h2>Movies</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aliases</th>
              <th>Year</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((video) => (
              <tr key={video.id}>
                <td>{video.name}</td>
                <td>{video.alias}</td>
                <td>{video.year}</td>
                <td>{video.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.videos.movies,
});

export default connect(mapStateToProps, { getMovies })(Movies);
