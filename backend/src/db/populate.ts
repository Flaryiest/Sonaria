import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const databaseURL = process.env.DATABASE_URL
const dbReset = 'DROP TABLE users'
const createUsers =
    'CREATE TABLE users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, email TEXT UNIQUE, password TEXT)'

async function main() {
    console.log('creating - please wait')
    const client = new pg.Client({
        connectionString: databaseURL
    })
    await client.connect()
    await client.query(dbReset)
    await client.query(createUsers)
    await client.end()
    console.log('done')
}

main()
