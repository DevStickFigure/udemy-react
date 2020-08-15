import { READ_EVENTS, DELETE_EVENTS, READ_EVENT, UPDATE_EVENT, CREATE_EVENTS } from '../actions';
import _ from 'lodash';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    case UPDATE_EVENT:
    case CREATE_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };
    case READ_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    default:
      return events;
  }
};
