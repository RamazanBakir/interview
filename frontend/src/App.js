import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBranches } from './store/branchSlice';

function App() {
  const branches = useSelector((state) => state.branches);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllBranches());
  }, [dispatch]);

  return (
      <div>
        <h1>Branches</h1>
        {branches.map((branch) => (
            <div key={branch.id}>
              <h3>{branch.name}</h3>
              <p>{branch.full_address}</p>
            </div>
        ))}
      </div>
  );
}

export default App;
