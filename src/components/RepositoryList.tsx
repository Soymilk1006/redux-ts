import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const RepositoryList: React.FC = () => {
  const [input, setInput] = useState('');
  const { searchRepository } = useActions();
  const { data, error, loading } = useSelector((state) => state.repository);
  console.log('data====', data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepository(input);
  };

  return (
    <div>
      <h2>RepositoryList</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button>Click Me</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <ul>
        {!error &&
          !loading &&
          data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default RepositoryList;
