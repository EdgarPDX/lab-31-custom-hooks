import React from 'react';
import PropTypes from 'prop-types';

const PageButtons = ({ page, pageUp, pageDown }) => (
  <>
    <button
      onClick={pageDown} disabled={page <= 1}>
        previous Page
    </button>
    <button
      onClick={pageUp}>
        Next Page
    </button>
    
  </>
);


PageButtons.propTypes = {
  page:PropTypes.number,
  pageUp: PropTypes.func,
  pageDown: PropTypes.func,
};

export default PageButtons;
