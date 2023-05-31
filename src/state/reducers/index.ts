import repositoryReducer from './repositoryReducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({
  repository: repositoryReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
