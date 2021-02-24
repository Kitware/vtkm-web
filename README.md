# vtkm-web
This repository is home to the files for the VTK-m website.

### Developing locally
Start by cloning this repository followed by `cd vtkm-web`.

#### Setting up Jekyll
1. Install gem dependencies using bundler - `bundle install` (if you don't have bundler installed, you may need to run `gem install bundler`)
2. Serve the site using `bundle exec jekyll serve`

#### Building the code
1. Open a new tab in your shell application
2. Install dev dependencies - `npm install`
3. Run one of the build commands:
    - To build for development run `npm run dev`
    - To build for production run `npm run prod`
    - If you are making a lot of changes, you might want to watch for changes using `npm run watch`

**NOTE:** Make sure you build for production before pushing your changes live. PurgeCSS only works on the production build, so you'll likely have enormous CSS/JS files if you don't.
