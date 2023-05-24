import { RepositoryState, Action } from '../actions/index';
import { ActionType } from '../action-types';

const reduer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reduer;
