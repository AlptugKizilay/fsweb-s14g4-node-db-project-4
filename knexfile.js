// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seed"
    },
    useNullAsDefault: true,
    pool:{
      afterCreate:(conn,done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },

};
