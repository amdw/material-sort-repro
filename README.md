# Angular Material table sorting bug repro

This project is intended to reproduce a problem with table sorting in
Angular Material using custom `sortingDataAccessor` functions. This bug was
reported as https://github.com/angular/material2/issues/15888.

The example table has a "Score Display" column which displays numbers using
fraction characters, e.g. "2½" instead of "2.5"; however, it is intended to
be sorted according to the numerical order.

The bug is that if `sortingDataAccessor` on `MatTableDataSource` is assigned
after the `sort` member, the sorting does not work as expected, whereas if
the order of those two assignments is reversed, it does work as expected.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
