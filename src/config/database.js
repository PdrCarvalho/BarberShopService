module.exports = {
  dialect: 'postgres',
  host: 'localhost',

  database: 'barbershopservice',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
