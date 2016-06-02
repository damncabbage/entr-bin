# entr-bin

A thin Node.js wrapper around Eric Radman's entr (http://entrproject.org), a cross-platform file-watcher that runs on Linux, OS X and BSD.

The most comprehensive usage examples and other help are on that site; a short summary follows:


## Installation

```
$ npm install --save-dev entr-bin
```


## Usage

Entr handles many cases, but it's usage can be... finicky. It intentionally exits when a file it's watching is removed, and it requires an additional `-d` option to track adding files.

The man page has some simple examples (paraphrased):

```bash
$ entr () { node_modules/.bin/entr "$@"; };  # A usage shortcut if you're running this in bash directly, instead of in a run-script.

# Run "make all" after these files have changed:
$ ls -d * | entr make all

# Auto-reload an app if any JS file in the src/ tree changes:
$ find src/ | entr -r node app.js

# Clear the screen and run an SQL script when it's updated:
$ ls my.sql | entr -p psql -f my.sql
```

Realistically, though, you'll want to be doing something like this:

```bash
$ entr () { node_modules/.bin/entr "$@"; };  # See above.

# Run "make all" when any JS file is added to, removed from, or updated in the src/ tree:
$ false; while [ $? -gt 0 ]; do find src -name "*.js" | entr -d make all; done
```


## License

The original entr source, and this bin wrapper, are under ISC-style licenses. See the [LICENSE](LICENSE) file for more detailed information on the license, and the license used for compatibility libraries.
