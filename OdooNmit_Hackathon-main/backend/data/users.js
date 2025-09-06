import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin user ',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    address: 'Nepalgunj, Banke',
    contact: { phone_no: '9800000010', isVerified: true },
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'johndoe@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    address: 'Nepalgunj, Banke',
    contact: { phone_no: '9800000011' },
  },
  {
    name: 'jane doe',
    email: 'janedoe@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    address: 'Nepalgunj, Banke',
    contact: { phone_no: '9800000012' },
  },
]

export default users
