import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBranches } from '../branchesSlice';

const BranchList = () => {
    const dispatch = useDispatch();
    const branches = useSelector((state) => state.branches.branches);
    const loading = useSelector((state) => state.branches.loading);
    const error = useSelector((state) => state.branches.error);

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
            <h2>Branches</h2>
            {branches.map((branch) => (
                <div key={branch.id}>
                    <h3>{branch.name}</h3>
                    <p>{branch.full_address}</p>
                    <p>{branch.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default BranchList;
