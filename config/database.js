module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            connectionString: env('DATABASE_URL'), //pulls from environment
            ssl: { rejectUnauthorized: false },
          }
        : {
            filename: env('DATABASE_FILENAME', '.tmp/data.db'), //holds data locally if it defaults to sqlite
          },
    useNullAsDefault: env('DATABASE_CLIENT') !== 'postgres',
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 60000,
  },
});
