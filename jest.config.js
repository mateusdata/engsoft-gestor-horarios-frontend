// jest.config.js

module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
      // Adicione a configuração para lidar com módulos ES aqui
      // Por exemplo, se você está usando Node.js com suporte a módulos ES nativos:
      '^.+\\.js$': 'babel-jest',
    },
  };
  