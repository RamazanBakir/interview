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
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {branches.map((branch) => (
                    <tr key={branch.id}>
                        <td>{branch.id}</td>
                        <td>{branch.name}</td>
                        <td>{branch.full_address}</td>
                        <td>{branch.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BranchList;
