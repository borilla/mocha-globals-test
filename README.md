# mocha-globals-test
Test of mocha global setup/teardown hooks

## Introduction

Mocha allows you to create gobal hooks to run before and after all tests. These hooks
can be very useful for one-time setup/teardown for all tests or for setup/teardown that
is applicable to all tests. To create these global hooks, simply call them in the
global context, ie outside of any `describe` block:

- `before` will be run before any tests have run
- `beforeEach` will be run before each test in each test-suite
- `afterEach` will be run before each test in each test-suite
- `after` will be run after all tests have run

## Try it out

Clone the repository:
```
git clone https://github.com/borilla/mocha-globals-test.git
```

Enter the newly created repo directory:
```
cd mocha-globals-test
```

Install required modues (actually just mocha):
```
npm install
```

Run the test:
```
npm test
```

## Results

The output of this test is:

```sh
$ npm test

> mocha *.js

>>>>>>>> BEFORE  ALL <<<<<<<<
  suite 1
>>>>>>>> BEFORE EACH <<<<<<<<
    √ test 1.1
>>>>>>>> AFTER  EACH <<<<<<<<
>>>>>>>> BEFORE EACH <<<<<<<<
    √ test 1.2
>>>>>>>> AFTER  EACH <<<<<<<<

  suite 2
>>>>>>>> BEFORE EACH <<<<<<<<
    √ test 2.1
>>>>>>>> AFTER  EACH <<<<<<<<
>>>>>>>> BEFORE EACH <<<<<<<<
    √ test 2.2
>>>>>>>> AFTER  EACH <<<<<<<<

>>>>>>>>  AFTER  ALL <<<<<<<<

  4 passing (14ms)
```
