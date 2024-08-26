module.exports = function (plop) {
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
        templateFile: 'plop-generator/templates/component/component.hbs',
      },
    ],
  });
};
