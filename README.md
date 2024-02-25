# [BASE] Clean Frontend Architecture (CFA)

### DESCRIPTION

This repository adapt Clean Architecture concept with use of `Next.js` and `Typescript`, this repo is created for base CFA and testing purpose.

## Structure
### core
    1. data
    Contains definition of repositories

    2. dataStore
    Contains definition of state like redux, zustand etc

    3. domain
    Contains definition of entities, presenters, usecases 

    4. hooks
    Contains definition of custom hooks

    5. libs
    Contains library, utilities etc

    6. services
    Contains backend services for UI components, handling business logic, data, and server-side communication

    7. ui
    Contains definition for ui components, server side components, styles etc

        components
        - contains all the reusable functional/presentational components
        pages
        
        features
        - contains feature specific components


## Environment Variables



## Technologies Used

* `Typescript`
* `Next.js 13`
* `Jest`

## Before Run
- Make sure you have the .env variables
- Make sure your node version is 18.17.0

## Run Locally

Install dependencies

```bash
  npm install
  # or
  yarn install
```

Start development

```bash
  npm run dev
  # or
  yarn dev
```


## Running Tests

To run tests, run the following command

Running test with npm

```bash
  npm run test
```

Running test with yarn

```bash
  yarn test
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Roadmap

- [ ]  Main page

## Notes
To make sure the code remain same whoever the programmer is, please follow the rules:

- Install all extension that are recommended.

## Authors

- Gilang Ramadhan [@ramaand](https://www.github.com/ramaand) [@portofolio](https://gilstuffs.xyz)

