exports.up = function(knex) {
    return knex.schema.createTable('produto', 
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('codigo_barra').notNullable();
        table.string('valor').notNullable();
        table.string('unidade').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produto');
};
