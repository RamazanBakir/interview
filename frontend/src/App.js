import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBranches } from './store/branchSlice';

const App = () => {
    const branches = useSelector((state) => state.branches.branches);
    const loading = useSelector((state) => state.branches.loading);
    const error = useSelector((state) => state.branches.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBranches());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
};

export default App;
