### Architecture

in the App we use Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications.

##### Layers
Layers are standardized across all FSD projects. You don't have to use all of the layers, but their names are important. There are currently seven of them (from top to bottom):

App — everything that makes the app run — routing, entrypoints, global styles, providers.

Pages — full pages or large parts of a page in nested routing.

Widgets — large self-contained chunks of functionality or UI, usually delivering an entire use case.

Features — reused implementations of entire product features, i.e. actions that bring business value to the user.

Entities — business entities that the project works with, like user or product.

Shared — reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily.

See more: https://feature-sliced.design/docs/get-started/overview
