
exports.up = function(knex) {
 return  knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');

  
};

// npx knex migration:latest para executar a criação da tabela
// para desfazer a ultima execução da migrate npx knex migrate:rollback 
// listar migrations executadas npx knex migrate:status
// para criar esse arquivo >> npx knex migration:make table_name