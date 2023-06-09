import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;
    return (
      <div>
        <label className="display">
          Find contacts by name
          <input
            type="text"
            name="filter"
            title="Insert any name you want to search for."
            onChange={handleChange}
            value={filter}
          ></input>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;
