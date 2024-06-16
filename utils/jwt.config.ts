// toDo
// import { JWT } from 'jsonwebtoken'
// interface NuxtConfig {
//   auth: {
//     jwt: {
//       secret: string
//       expiresIn: string
//       algorithm: string
//     }
//   }
// }
// export default defineNuxtConfig({
//   // методы работы с токенами
//   auth: {
//     // JWT конфигурация
//     jwt: {
//       // секретный ключ для подписи и верификации токена
//       secret: 'your_secret_key_here',
//       // время жизни токена в секундах
//       expiresIn: '1h',
//       // алгоритм шифрования
//       algorithm: 'HS256',
//     },
//     // регистрация
//     register: async (req, res) => {
//       const user = await registerUser(req.body)
//       const token = generateToken(user)
//       res.json({ token })
//     },

//     // вход
//     login: async (req, res) => {
//       const user = await loginUser(req.body)
//       const token = generateToken(user)
//       res.json({ token })
//     },

//     // обновление токена
//     refreshToken: async (req, res) => {
//       const token = req.headers.authorization
//       const user = await verifyToken(token)
//       const newToken = generateToken(user)
//       res.json({ token: newToken })
//     },

//     // выход
//     logout: async (req, res) => {
//       res.json({ message: 'Logged out successfully' })
//     },
//   },
  
// })

// // функция для генерации токена
// function generateToken(user: any) {
//   const token = JWT.sign(
//     {
//       sub: user.id,
//       name: user.name,
//       email: user.email,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
//       algorithm: 'HS256',
//     }
//   )
//   return token
// }

// // функция для верификации токена
// function verifyToken(token: string) {
//   try {
//     const decoded = JWT.verify(token, process.env.JWT_SECRET)
//     return decoded
//   } catch (error) {
//     throw new Error('Invalid token')
//   }
// }