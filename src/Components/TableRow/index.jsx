const TableRow = ({ user, onDeleteHandler, onEditHandler }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={onDeleteHandler}>Delete</button>
        <button onClick={onEditHandler}>Edit</button>
      </td>
    </tr>
  );
};

export default TableRow;
