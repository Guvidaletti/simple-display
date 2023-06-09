# Simple-Display

Simple-Display is a lightweight React component library built with TypeScript and SCSS that simplifies element positioning and responsiveness in applications. It provides three main components to enhance layout control:

- Container: Sets a maximum content width on the screen, preventing layout issues on large screens while maintaining a maximum size on smaller screens.

- Row: Represents a flexible content row that breaks when necessary. It allows you to prevent content from breaking into separate lines when placed within the same row.

- Col: Similar to Bootstrap's behavior, this column component offers props for screen sizes (xs, sm, md, lg, xl) and a range from 1 to 12. It simplifies responsiveness with fixed media queries, enabling you to divide the screen into proportional column widths.

## Instalation

To start using Simple-Display, simply run 

```
npm install simple-display
```

in your React application. Import the default stylesheet in your application's High Order Component with 

```
import 'simple-display/dist/style.css'
```

and you're ready to go!

## Made with

- React: 18.2.0
- TypeScript: 4.9.3
- SASS: 1.62.0


## Key Features

Easy-to-use components for layout control.
Responsive design with predefined media queries.
Semantically organized column sizes.

