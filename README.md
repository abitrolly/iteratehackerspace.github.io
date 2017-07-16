iterate website
---------------


# Building
After cloning the repo, install all dependencies with `yarn`.

```
$ yarn
```

The site itself is in plain `index.html`.


# Changing lecture notes

You'll need to have `fswatch` installed,

```
$ brew install fswatch
```

And then just run:

```
$ yarn run watch
```

This will run `build.sh` whenever there is a file change to the
lecture notes.

The front end lectures are generated with the script
`front-end-lectures.js`. Back end lectures are hard coded in the HTML
itself, needs to be redone as frontend currently is.

To make changes to the lectures, Armenian or English, simple change
either

`lib/bootcamps/frontend/lectures-en.js`

or

`lib/bootcamps/frontend/lectures-am.js`

and the `yarn run watch` process will automatically rebuild the
lectures. Follow the object structure as presented in
`lectures-en.js`.

Lectures are generated into pure HTML the directory
`frontend-bootcamp-armenian` and `frontend-bootcamp-english`.

Once you are satisified with the changes, open a Pull Request.
