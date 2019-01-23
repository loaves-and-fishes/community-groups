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


## Contributing

See this [Contributing] guide for details.

[Contributing]: CONTRIBUTING.md