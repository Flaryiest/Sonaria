import pool from './pool.js'

export default class database {
    async signUp(email: string, password: string) {
        console.log(email, password)
        try {
            await pool.query(
                'INSERT INTO users (email, password) VALUES ($1, $2)',
                [email, String(password)]
            )
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    async login(email: string) {
        try {
            const { rows } = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            )
            return rows[0]
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async getInfo(user: any) {
        try {
            const { rows } = await pool.query(
                'SELECT * FROM users LEFT JOIN boxes ON users.id = boxes.connected_userid LEFT JOIN box_contents ON boxes.id = box_contents.boxid'
            )
            rows.filter((row) => {
                return row.id === user.id
            })
            return rows[0]
        } catch (err) {
            console.log(err)
            return false
        }
    }
}
