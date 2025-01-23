import dotenv from 'dotenv'
import database from '../db/queries.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
dotenv.config()
const db = new database()
export default class apiController {
    constructor() {
        this.signUp = async (req, res) => {
            console.log(req.body.password)
            bcrypt.hash(req.body.password, 10, async function (err, hash) {
                console.log(hash)
                if (err) {
                    console.error(err, 'error')
                    return res.status(500).send('Internal server error')
                }
                const response = await db.signUp(req.body.email, String(hash))
                if (response) {
                    res.status(200).send('User signed up successfully')
                } else {
                    res.status(400).send('Failed to sign up user')
                }
            })
        }
        this.login = async (req, res) => {
            const userInfo = await db.login(req.body.email)
            if (!userInfo) {
                res.status(400).send()
            } else {
                bcrypt.compare(
                    req.body.password,
                    userInfo.password,
                    function (err, result) {
                        if (err) {
                            console.log(err, 'error')
                            res.status(400).send()
                        } else {
                            jwt.sign(
                                { userInfo },
                                process.env.JWT_SECRET,
                                { expiresIn: '100000s' },
                                (err, token) => {
                                    if (err) {
                                        console.log(err)
                                        res.status(400).send()
                                    } else {
                                        res.status(200)
                                            .cookie('jwt', token, {
                                                sameSite: 'none',
                                                secure: false,
                                                path: '/',
                                                httpOnly: true,
                                                expires: new Date(
                                                    new Date().getTime() +
                                                        24 * 60 * 60 * 1000
                                                ),
                                                partitioned: false
                                            })
                                            .send('cookie')
                                    }
                                }
                            )
                        }
                    }
                )
            }
        }
        this.verifyToken = async (req, res, next) => {
            const token = req.cookies.jwt
            if (!token) {
                console.log('not logged in')
                res.status(400).send()
            } else {
                jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                    if (err) {
                        console.log(err)
                        res.status(400).send()
                    } else {
                        req.user = decoded.userInfo
                    }
                    next()
                })
            }
        }
        this.getUserInfo = async (req, res) => {
            if (req.user) {
                const userInfo = await db.getInfo(req.user)
                res.json(userInfo).status(200).send()
            } else {
                res.status(400).send()
            }
        }
    }
}
//# sourceMappingURL=apiController.js.map
