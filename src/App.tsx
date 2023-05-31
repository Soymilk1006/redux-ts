import { Provider } from 'react-redux';
import { store } from './state';
import RepositoryList from './components/RepositoryList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        hi
        <RepositoryList></RepositoryList>
      </div>
    </Provider>
  );
};

export default App;
