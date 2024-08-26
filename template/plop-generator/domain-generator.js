module.exports = function (plop) {
  plop.setGenerator('domain', {
    description: 'Entity domain generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Entity domain name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Gateway.ts',
        templateFile: 'plop-generator/templates/domain/domainGateway.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Service.ts',
        templateFile: 'plop-generator/templates/domain/domainService.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Adapter.ts',
        templateFile: 'plop-generator/templates/domain/domainAdapter.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Types.ts',
        templateFile: 'plop-generator/templates/domain/domainTypes.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/index.ts',
        templateFile: 'plop-generator/templates/domain/index.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/use{{pascalCase name}}.ts',
        templateFile: 'plop-generator/templates/domain/useCases/useDomain.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/index.ts',
        templateFile: 'plop-generator/templates/domain/useCases/index.hbs',
      },
    ],
  });
};
