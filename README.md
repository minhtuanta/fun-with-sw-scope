# A fun experiment with Service Worker scope
This experiment is to confirm the following:
- Service worker scope control everything that begins with the specified scope.
- The scope path is case insensitive.

The scope registered is `/fun` which should match the following paths:
- `/fun/`
- `/funstuff/`
- `/fun/index.html`
- `/funstuff/index.html`
- `/funStuff/index.html`

When browsing to those paths, you should see the log `In fetch` in the console.

# How to run
First, run `npm install`. There's only one dev-dependency which is `serve`. You could you use a server of your chose if you don't want to use `serve`.

Run `npm start` when the installation is complete.