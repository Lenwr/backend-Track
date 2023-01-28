module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-44.railway.app'),
      port: env.int('PGPORT', 7799),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '6Tv4OUvI0mS2rcGlF9a8'),
      ssl: env.bool(true),
    },
  },
});
