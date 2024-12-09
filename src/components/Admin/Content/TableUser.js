const TableUser = (props) => {
    const { listUsers } = props
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Usename</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((items, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <td>{items.id}</td>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                <td>{items.role}</td>
                                <td>
                                    <button className="btn btn-success">View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => props.handleClickBtnUpdate(items)}>Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUsers && listUsers.length === 0 && <tr><td colSpan={'4'}>Not found data</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser