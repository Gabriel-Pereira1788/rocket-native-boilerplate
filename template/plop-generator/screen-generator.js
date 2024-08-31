module.exports = function (plop) {
  plop.setGenerator('screen', {
    description: 'Screen generator',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'Screen type (auth | public | private):',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Screen name:',
      },
    ],
    actions: function (data) {
      if (
        data.type !== 'auth' &&
        data.type !== 'public' &&
        data.type !== 'private'
      ) {
        throw new Error(' Invalid screen type (auth | public | private)');
      }
      return [
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/__tests__/{{lowerCase name}}.view.test.tsx',
          templateFile:
            'plop-generator/templates/screen/__tests__/component.view.test.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/__tests__/{{lowerCase name}}.controller.test.tsx',
          templateFile:
            'plop-generator/templates/screen/__tests__/component.controller.test.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/__tests__/{{lowerCase name}}.screen.test.tsx',
          templateFile:
            'plop-generator/templates/screen/__tests__/component.screen.test.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/{{lowerCase name}}.view.tsx',
          templateFile: 'plop-generator/templates/screen/component.view.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/{{lowerCase name}}.controller.tsx',
          templateFile:
            'plop-generator/templates/screen/component.controller.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/{{lowerCase name}}.screen.tsx',
          templateFile: 'plop-generator/templates/screen/component.screen.hbs',
        },
        {
          type: 'add',
          path: 'src/app/screens/{{lowerCase type}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-generator/templates/screen/index.hbs',
        },
      ];
    },
  });
};
