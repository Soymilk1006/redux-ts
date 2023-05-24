import { ActionType } from '../action-types';
export interface RepositoryState {
  data: string[];
  loading: boolean;
  error: string | null;
}

interface searchRepositoryState {
  type: ActionType.SEARCH_REPOSITORY;
}

interface searchRepositoryStateSuccess {
  type: ActionType.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface searchRepositoryStateError {
  type: ActionType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | searchRepositoryState
  | searchRepositoryStateSuccess
  | searchRepositoryStateError;
