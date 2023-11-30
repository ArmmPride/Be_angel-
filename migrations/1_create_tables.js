// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
  .createTable('admins', (table) => {
    table.increments('id').primary();
    table.string('adminname').notNullable();
    table.string('password').notNullable();
    table.string('role').defaultTo('admin');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  })
  .createTable('dreams', (table) => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.text('letter');
    table.string('birth');
    table.string('image');
    table.string('age');
    table.boolean('is_active').defaultTo(false);
    table.dateTime('created_at');
    table.dateTime('updated_at');
  })
    
.createTable('benevolents', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('surName').notNullable();
  table.string('phoneNumber').notNullable();
  table.string('mail').notNullable();
  table.integer('child_id').notNullable();  
  table.dateTime('created_at');
  table.dateTime('updated_at');
})

.createTable('our_actions', (table) => {
  table.increments('id').primary();
  table.text('description');
  table.specificType('photos', 'TEXT[]');
  table.text('year');
  table.dateTime('created_at');
  table.dateTime('updated_at');
});
 
}


async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables ... ');
    process.kill(process.pid);
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();