import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Icon from './icon';
const header = ({ title, toggle, onToggle, onClick, filterPicked }) => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper fixed-top row align-items-center justify-content-end pt-1">
      <div className="col-2 text-left">
        <button className="navbar-toggler filter" type="button" onClick={() => history.goBack()}>
          <Icon name="ic_back" width="20" height="20" />
        </button>
      </div>
      <div className="col-8 text-center">
        <h3 className="uppc">{t(title)}</h3>
      </div>
      <div className="col-2 text-right">
        <div className="dropdown">
          <button onClick={() => onToggle()} className="navbar-toggler filter" type="button">
            <Icon name="ic_filter" width="20" height="20" />
          </button>
          {toggle && (
            <div
              className="dropdown-menu dropdown-menu-right show"
              aria-labelledby="dropdownMenuButton"
            >
              <button
                onClick={() => {
                  onClick(0);
                  onToggle();
                }}
                className={filterPicked === 0 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('interest_rate_decreases')}
              </button>
              <button
                onClick={() => {
                  onClick(1);
                  onToggle();
                  filterPicked = 1;
                }}
                className={filterPicked === 1 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('maturity_date_increases_gradually')}
              </button>
              <button
                onClick={() => {
                  onClick(2);
                  onToggle();
                  filterPicked = 2;
                }}
                className={filterPicked === 2 ? 'dropdown-item active' : 'dropdown-item'}
              >
                {t('decreasing_Limit')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string,
  filterPicked: PropTypes.number,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
  onToggle: PropTypes.func
};
export default header;
