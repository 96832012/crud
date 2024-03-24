import TableRow from "../TableRow";

const Table = ({ dataAboutUser, onDeleteHandler, onEditHandler }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dataAboutUser.map((el) => (
          <TableRow
            user={el}
            key={el.id}
            onDeleteHandler={() => onDeleteHandler(el.id)}
            onEditHandler={() => onEditHandler(el)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
