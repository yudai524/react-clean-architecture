module.exports = function (plop) {
  // Entity
  plop.setGenerator('Entity', {
    description: 'Entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your entity name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/core/entities/{{pascalCase name}}.ts',
        templateFile: 'plopTemplates/core/Entity.ts.hbs',
      },
    ],
  })

  // UseCase
  plop.setGenerator('UseCase', {
    description: 'UseCase',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your UseCase name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'src/core/useCases/{path please}',
      },
    ],
    actions: [
      {
        type: 'add', // add an interactor file.
        path: 'src/core/useCases/{{pascalCase path}}/{{pascalCase name}}Interactor.ts',
        templateFile: 'plopTemplates/core/Interactor.ts.hbs',
      },
      {
        type: 'append', // append a symbol definition for this use case.
        path: 'src/core/symbols/index.ts',
        pattern: /(const\ssymbols\s=\s{)/g,
        templateFile: 'plopTemplates/core/symbols/useCase.ts.hbs',
      },
      {
        type: 'add', // add a type definition file for this feature.
        path: 'src/core/types/useCases/{{camelCase path}}.ts',
        templateFile: 'plopTemplates/core/types/useCases.ts.hbs',
        abortOnFail: false,
      },
      {
        type: 'append', // append a type definition for this use case.
        path: 'src/core/types/useCases/{{camelCase path}}.ts',
        templateFile: 'plopTemplates/core/types/useCase.ts.hbs',
      },
    ],
  })

  // EntityVM
  plop.setGenerator('EntityVM', {
    description: 'EntityVM',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your EntityVM name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'src/core/entityVMs/{path please}',
      },
    ],
    actions: [
      {
        type: 'add', // add an EntityVM file.
        path: 'src/core/entityVMs/{{pascalCase path}}/{{pascalCase name}}.ts',
        templateFile: 'plopTemplates/core/EntityVM.ts.hbs',
      },
      {
        type: 'add', // add an EntityVM Factory file.
        path: 'src/core/factories/entityVMs/{{pascalCase path}}/{{pascalCase name}}.ts',
        templateFile: 'plopTemplates/core/Factory.ts.hbs',
      },
      {
        type: 'add', // add a type definition file for this feature.
        path: 'src/core/types/entityVMs/{{camelCase path}}.ts',
        templateFile: 'plopTemplates/core/types/default.ts.hbs',
      },
      {
        type: 'append', // append a type definition for this EntityVM.
        path: 'src/core/types/entityVMs/{{camelCase path}}.ts',
        templateFile: 'plopTemplates/core/types/entityVM.ts.hbs',
      },
    ],
  })
}
