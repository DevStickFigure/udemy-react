import { READ_EVENTS } from '../actions';
import _ from 'lodash';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      console.log(action);
      console.log(_.mapKeys(action.response.data, 'id'));
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
