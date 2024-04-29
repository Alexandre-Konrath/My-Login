module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'my-login',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
