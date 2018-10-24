# community-groups

An app to manage community groups of a church from a high level.

Can be previewed here: https://community-groups.netlify.com/ (login with test@test.com, no password atm)

## Writing Tests

If your test needs mirage, you need to import the `setupMirage` helper

```js
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
```

And then call it after `setupApplicationTest(hooks)` or other `setup*Test(hooks)` calls.

```js
setupMirage(hooks);
```

## Follow along

I'm recording my work on this app. The videos can be found here:

https://www.youtube.com/watch?v=BKMXstTQWlc&list=PLfQwL10yab39zHh-4Ub-u9IqwS5C0yHsE

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd cg`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
