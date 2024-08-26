module.exports = function (plop) {
  plop.setGenerator('adapter', {
    description: 'Adapter generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Adapter name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/adapters/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: 'plop-generator/templates/adapter/adapter.hbs',
      },
      {
        type: 'add',
        path: 'src/adapters/{{camelCase name}}/index.ts',
        templateFile: 'plop-generator/templates/adapter/index.hbs',
      },
      {
        type: 'add',
        path: 'src/adapters/{{camelCase name}}/types.ts',
        templateFile: 'plop-generator/templates/adapter/types.hbs',
      },
      {
        type: 'add',
        path: 'src/adapters/{{camelCase name}}/implementation/index.ts',
        templateFile:
          'plop-generator/templates/adapter/implementation/index.hbs',
      },
    ],
  });
};
