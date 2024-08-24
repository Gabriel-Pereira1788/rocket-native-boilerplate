module.exports = function (plop) {
  plop.setHelper('capitalize', function (text) {
    text[0].toUpperCase();
    return text;
  });
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
          templateFile: 'generate_templates/adapter/adapter.hbs',
        },
        {
            type: 'add',
            path: 'src/adapters/{{camelCase name}}/index.ts',
            templateFile: 'generate_templates/adapter/index.hbs',
          },
          {
            type: 'add',
            path: 'src/adapters/{{camelCase name}}/types.ts',
            templateFile: 'generate_templates/adapter/types.hbs',
          },
          {
            type: 'add',
            path: 'src/adapters/{{camelCase name}}/implementation/index.ts',
            templateFile: 'generate_templates/adapter/implementation/index.hbs',
          },
      ],
  });
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'generate_templates/component/component.hbs',
      },
    ],
  });
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
        templateFile: 'generate_templates/domain/domainGateway.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Service.ts',
        templateFile: 'generate_templates/domain/domainService.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Adapter.ts',
        templateFile: 'generate_templates/domain/domainAdapter.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/{{name}}Types.ts',
        templateFile: 'generate_templates/domain/domainTypes.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/index.ts',
        templateFile: 'generate_templates/domain/index.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/use{{pascalCase name}}.ts',
        templateFile: 'generate_templates/domain/useCases/useDomain.hbs',
      },
      {
        type: 'add',
        path: 'src/domain/{{pascalCase name}}/useCases/index.ts',
        templateFile: 'generate_templates/domain/useCases/index.hbs',
      },
    ],
  });
};
