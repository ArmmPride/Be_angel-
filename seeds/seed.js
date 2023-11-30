// NPM Modules
import knex from 'knex';
import bCrypt from 'bcryptjs';
import knexConfigs from '../knex.configs';
import config from '../src/config/variables.config';

const { ADMIN_PASSWORD } = config;

async function seed(pg) {
  // Deletes ALL existing entries

  // Deletes ALL existing entries with cascade.

  // Inserts seed entries

  // await pg('dreams').insert([
   
  //   {
  //     full_name: 'sadasd',
  //     birth: 'aslkdnkalsfnd',
  //     age: 5645645,
  //     letter: 'sdkfnsdkf',
  //     image: 'http://192.168.90.131:3005/upload/3435a134-e8dc-4956-9bf0-c4d81d0873c6.jpg',
  //     is_active: false,
  //     created_at: new Date().toISOString(),
  //     updated_at: new Date().toISOString()
  //   }
  // ]);

    await pg('admins').insert([
    {
        adminname: 'admin',
        password: bCrypt.hashSync(
            ADMIN_PASSWORD,
            bCrypt.genSaltSync(10),
            null
          ),
    }
])
}
async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log('Successfully inserted all data ... ');
    process.kill(process.pid);
  } catch (error) {
    console.error(error.message);
  }
}

init();