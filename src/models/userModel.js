const connection = require("./connection");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  const [users] = await connection.execute(
    "SELECT * FROM gestao_empresarial.users"
  );
  return users;
};

const getOneUser = async (email) => {
  const query = "SELECT * FROM gestao_empresarial.users WHERE email = ?";
  const [user] = await connection.execute(query, [email]);
  return user[0];
};

const createUser = async (user) => {
  const { email, senha } = user;

  const hashedPassword = await bcrypt.hash(senha, 10);

  const query =
    "INSERT INTO gestao_empresarial.users(email, senha) VALUES (?, ?)";

  const [createdUser] = await connection.execute(query, [
    email,
    hashedPassword,
  ]);

  return createdUser;
};

//todo put e delete

// const deleteTask = async (id) => {
//   const removedTask = await connection.execute(
//     "DELETE FROM tasks WHERE id = ?",
//     [id]
//   );
//   return removedTask;
// };

// const updateTask = async (id, task) => {
//   const query = "UPDATE tasks SET title = ?, status = ? where id = ?";
//   const { title, status } = task;

//   const updatedTask = await connection.execute(query, [title, status, id]);
//   return updatedTask;
// };

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
};
