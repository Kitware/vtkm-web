# vtkm-web
This repository is home to the files for the VTK-m website.

### Developing locally
1. Clone this repository
2. Install dev dependencies - `npm install`
3. Build the site
    - To build for development run `npm run dev`
    - To build for production run `npm run prod`
    - If you are making a lot of changes, you might want to watch for changes using `npm run watch`
4. In a new panel/tab/window, run `jekyll serve`

**NOTE:** Make sure you build for production before pushing your changes live. PurgeCSS only works on the production build, so you'll likely have enormous CSS/JS files if you don't.
