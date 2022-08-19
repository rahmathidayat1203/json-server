import { faker } from '@faker-js/faker'
import fs from 'fs/promises'
const dataUser = []
for (let index = 0; index < 5000; index++) {
  const user = {
    id: index + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }
  dataUser.push(user)
}
const writes = fs.writeFile('userData.json', JSON.stringify({
  dataUser
}, null, 2));
console.log(writes);
