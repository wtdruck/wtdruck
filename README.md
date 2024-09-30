<img src="https://raw.githubusercontent.com/wtdruck/wtdruck/refs/heads/main/docs/favicon-dark-mode.svg" width=50px />

# W. T. Druck Static Website

Tailwind based static website with light and dark mode.

## Development

### Requirements

Node.js https://nodejs.org/en

Install development dependencies:
```
npm install
```

Build the project
```
npx tailwindcss -i ./docs/input.css -o ./docs/output.css
```

Watch for changes and autobuild
```
npx tailwindcss -i ./docs/input.css -o ./docs/output.css --watch
```

### License
GPL-2.0
