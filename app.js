const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)

  const result = await prisma.users.create({
    data: {
      login: 'alice',
      firstName: 'Alice',
      lastName: 'Euler',
      email: 'alice@gmail.com',
    },
  })
  console.log(result)

  const nbInserted = await prisma.users.createMany({
    data: [
      {
        login: 'bob',
        firstName: 'Bob',
        lastName: 'Durac',
        email: 'bob@mail.com',
      },
      {
        login: 'charlie',
        firstName: 'Charlie',
        lastName: 'Turing',
        email: 'charlie@mail.com',
      },
    ],
    skipDuplicates: true,
  })
  console.log(nbInserted)

  const users = prisma.users.findMany()
  console.log(users)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })