// import
const { PrismaClient } = require('@prisma/client')

// instanciation d'un nouveau prisma client
const prisma = new PrismaClient()

const main = async () => {
  // Equivalent d'un SELECT * FROM users;
  const allUsers = await prisma.users.findMany()
  // Affichage du résultat
  console.log(allUsers)
}

// Execution de la fonction main
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    // Fermeture de la connection à la fin de l'exécution du script
    await prisma.$disconnect()
  })
