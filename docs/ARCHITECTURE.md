# Architecture

> All information below is a recommendations.

## Cores

The main part of the application that implements common features that are independent of the project.

## Domain

The domain layer implements it is all about project business logic and these objects can be classified looking at their design time characteristics:

### Entities - Domain

    It is all about modelled business objects, attributes and their relationships.

### Entities - Presenters

It retrieves data from domain services, and formats it for display in the view (using mappers on the same level).

### Services

    It defines services that can be implemented in the same layer or in separate layers. This gives an abstraction for certain features as logging, exception handling, that can be managed differently depending on the environment that will use the domain layer.

### Usecases

    Implementation of logic linked to the business objects, as validation rules, factories and repositories.
