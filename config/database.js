module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            connectionString: env('postgresql://postgres:[Soggyblossomed28]@db.ukvdirlpfbpjujchqjwz.supabase.co:5432/postgres'),
            ssl: {
              rejectUnauthorized: false, // required for Render / Supabase
            },
          }
        : {
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
    useNullAsDefault: env('DATABASE_CLIENT') !== 'postgres',
    pool: {
      min: 0,
      max: 10,
    },
    acquireConnectionTimeout: 60000,
  },
});
