import React from 'react';
import PropTypes from 'prop-types'

let Search = ({change}) => (
  <form>
    <label>
      Search:
      <input type="text" name="search" onChange={(e) => change(e)}></input>
    </label>
  </form>
)

Search.propTypes = {
  change: PropTypes.func.isRequired
}

export default Search;