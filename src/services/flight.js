import request from 'utils/request';

const Cheap = () => {
  return request({
    url: '/flights/cheap',
    method: 'get'
  });
};
const Business = () => {
  return request({
    url: '/flights/business',
    method: 'get'
  });
};
export { Cheap, Business };
