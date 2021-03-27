# NiceWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.
A single page application that presents a list of 5 European cities.
Display current weather situation of these cities like average temperature, weather status and the wind
strength. By clicking on a city the forecast in the next 48 hours would be displayed.

# Get started

### Jump to the root folder

```shell
cd nice-weather
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm i
npm start
```

Navigate to `http://localhost:4200/`.
Shut it down manually with `Ctrl-C`.

### API key for Authorization
Before you start the application you have to make an API key to fetch data from [OpenWeather](https://openweathermap.org/).
1. First of all, you should create an API key, Here is the link [API key](https://openweathermap.org/api/one-call-api#history-how).
2. Just put the generated API key in `/src/constants/ApiConstants.ts`, It would be like: <br />   
   `export const API_KEY: string = 'generatedApiKey';`

_NOTE: Definitely, It is not recommended way for authentication. Get API key by login process and keeping it in session storage 
, local storage or cookie are common ways. However, just to make it easy to up and running the assignment._


### npm scripts

These are the most useful commands defined in `package.json`:

- `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
- `npm run build` - runs the TypeScript compiler and asset copier once.
- `npm run lint` - runs `tslint` on the project files.
- `npm run serve` - runs `lite-server`.


These are the test-related scripts:

- `npm test` - builds the application and runs Intern tests (both unit and functional) one time.

These are also [Prettier](https://prettier.io/) scripts:

- `pretty` - run Prettier.
- `pretty-check` - check if your files are formatted.

## Code scaffolding

### Testing

I have written unit/functional test for services, component, interceptors, helpers.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by add a pre-commit hook. For more detail check `package.json`, husky section.

### Bootstrap and BEM

Use [BEM](http://getbem.com/introduction/) as CSS naming methodology and naming convention for writing cleaner and more readable CSS classes.
BEM also aims to write independent CSS blocks in order to reuse them later in your project.
I also preferred to use Bootstrap as a CSS framework.

### Spinner

I have created a component as Spinner for showing a loader while fetching data from API, in this case OpenWeather.

### Directories structure

Folder structure is like:

- src
    - app
        - components: all components
             - shared: shared component
        - services
        - facade: facade services
        - helpers: helper services
        - interceptors
        - interfaces
    - constants: constant values
    - mock-data: all mocked data for testing purposes 
    - assets: all assets like fonts, images and also SASS files
    - environment

### In-code Documentation

Good code does not need documentation however
I have made some documentation in code. Every service create has a unique API to it.
Writing how to use that API requires documentation that can be read outside of the code.
You do not want to inflate the class itself with details about how to use the API.
In this case Swagger would be awesome also for code generation as well.
There are some npm packages that you can use it to generate interfaces, enums, models and services as well,
like [ng-swagger-gen](https://www.npmjs.com/package/ng-swagger-gen).

### Browse-ability / bookmark-ability

1. It is possible to copy and paste exact url for hourly forecast directly in address bar. 
   use specific city with coordination in address bar as param, for instance for **Tallinn** it should be
   like `http://localhost:4200/hourly?lat=59.437&lon=24.7535`.

### Design Patterns
As you can see form directory structure, there is a directory name `facade` that is related to facade services to just 
wrap some services into to follow the clean code principle to inject at most 3 services to class. Also, I just user `proxy` pattern
 to follow inject service whenever needed.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a function as well) to
just responsible for a single task. That's why I just created a separate component for every part
and also keep the simple stupid, easy to test, maintainable and scalable.

### Note
For get hourly forecast data it seemed it needs [to buy plan](https://openweathermap.org/price), Tha's why 
I could not use [hourly forecast API](https://openweathermap.org/api/hourly-forecast) 
and I used [one call API](https://openweathermap.org/api/one-call-api) to get hourly forecast data.
