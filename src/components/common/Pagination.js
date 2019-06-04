import React from 'react';
import PropTypes from 'prop-types';
const Pagination = ({ number, total, onClick }) => {
  const loop = Math.floor(total / number);
  const rest = total % number;
  // const linkCount = loop < 5 ? loop : 5;
  return (
    <nav>
      {total > number && (
        <ul className="pagination">
          <li className="page-item">
            <button onClick={() => onClick(1)} className="page-link">
              <i className="fa fa-angle-double-left" />
            </button>
          </li>
          {Array.from(Array(loop), (item, index) => {
            return (
              <li className="page-item" key={index}>
                <button onClick={() => onClick(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            );
          })}
          {rest > 0 && (
            <li className="page-item">
              <button onClick={() => onClick(loop + 1)} className="page-link">
                {loop + 1}
              </button>
            </li>
          )}
          {rest > 0 ? (
            <li className="page-item">
              <button onClick={() => onClick(loop + 1)} className="page-link">
                <i className="fa fa-angle-double-right" />
              </button>
            </li>
          ) : (
            <li className="page-item">
              <button onClick={() => onClick(loop)} className="page-link">
                <i className="fa fa-angle-double-right" />
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};
Pagination.propTypes = {
  number: PropTypes.number,
  page: PropTypes.number,
  total: PropTypes.number,
  onClick: PropTypes.func
};
export default Pagination;
