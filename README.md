# yamltree is no longer actively maintained by VMware.

# yamltree
Browser-based YAML viewer.

I was not satisfied with my YAML browsing experience.
In particular, looking at large Cloud Foundry manifest files, without the ability to get the full path to an interesting element has been painful.

Current features:
- Click any element to get the full path from the root.
  - For arrays of objects, this path includes the `name` element, if it exists.
    (This is a common pattern in Cloud Foundry YAML files.)
- Renders elemnts semantically in HTML.

Features I'd like to add:
- Highlight clicked/active line.
- Expand/collapse.
- Improved styling.

To run:
1. Install dependencies with `npm intall`.
2. Open `index.html` in a browser, point it at a YAML file, and go!

