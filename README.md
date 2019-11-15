# Dashboard Editing Architecture Prototype

This project's aim is to explore and discover an optimal way of structuring our redux store and using redux to best allow for an editing experience, specifically for dashboards.

### Dashboards: The Centerpiece

Of course, the most essential piece to a dashboard is the dashboards state. It is the slice of state that contains all the data the dashboard needs to render. Note that it is 'dashboards' plural, implying that it can store multiple dashboards at a time, but for now we'll focus on the case of storing just one.

Importantly, it is read from and written to in only ONE place, regardless of whether or not you're in edit mode. This vastly simplifies reducer logic, and duplicating logic across domains. Additionally, because it's read from only one place, the dashboard UI doesn't need to worry about where it's getting its data from; it's always reading from the same data source, regardless of what mode it's in.

The dashboard object as returned from the API is a nested object with much of its contained data stored in arrays. Upon successfully retrieving the dashboard, we break out each self-contained piece into its own slice of state as a keyed object, with its own reducer responsible for updating it.

The logic for transforming the received dashboard to the more normalized version we have saved in redux is done through the use of middleware (custom or sagas) after listening for the 'dashboard success' action. The resulting structure is apparent by the file structure:

```
dashboards/
  elements/
  filters/
  layoutComponents/
  queries/
  titles/
```

### Handling Edit Mode

In a non-editable dashboard, the above description works fine. And even in an editable dashboard with no cancel feature, it's self explanatory. However, should we want to be able to make changes, decide they're no good, and then revert to the pre-edited dashboard state, we need to do a little more.

In order to handle this case, we have another piece of state called `saved_off_dashboard`. This has a set of simple actions associated with it, allowing it to
1) be populated with the data that lives in `dashboards` state
2) have its state copied back to `dashboards` state, overriding its existing state
3) be set to empty

Unlike the regular `dashboards` state, `saved_off_dashboard` is NEVER read from or written to. Its sole existence is to hold an old `dashboards` state and be able to send it back to `dashboards` should the time call for it. This covers the basic save/cancel operations -- simply setting itself to empty in the 'save' case, and copying itself back in the 'cancel' case.

The new file structure looks like this:

```
dashboards/
  elements/
  filters/
  layoutComponents/
  queries/
  titles/
saved_off_dashboard/
  elements/
  filters/
  layoutComponents/
  queries/
  titles/
edit_dashboard_mode/
```

The one piece we haven't touched on yet is the `edit_dashboard_mode` folder. This contains a final piece of state that holds useful extra edit-related information. Here, it's currently holding an `inEditMode` boolean, however, this can be removed as `inEditMode` can be inferred from whether or not `saved_off_dashboard` is empty. But, in the actual app, this would store which elements and filters have been deleted so it can make an API request later when 'save' is pressed.


### Edit-ception

The editing of filters within edit mode behaves quite similarly to how dashboards as a whole are edited. Next to the `filters/` directory, we have a `saved_off_filters/` directory that is populated with `filters` when the filter editor is opened. As in the case of editing dashboards, `filters` remains the one and only source that is read from and written to; `saved_off_filters` is either copied back and deleted if changes are cancelled or simply deleted if changes are saved.

The one difference between editing filters and editing the dashboard is that in editing filters, the original filters remain visible on the dashboard while editing takes place in the modal. Because we don't want changes to be reflected on the dashboard until after the save button in the modal is pressed, the filters that are visible on the dashboard when the modal is open are pulled from `saved_off_filters`, not `filters`. Once the modal is closed, the filters on the dashboard are once again sourced from `filters`, as `saved_off_filters` has been deleted.

### Open Questions

I decided to separate `saved_off_dashboard/` from `edit_dashboard_mode/` because they really are distinct entities: you can imagine that a savedOffDashboard may exist in a world without edits. And this way, it more clearly mirrors the structure we see in `dashboards/`. However, it may also be worth simply combining these two as `inEditMode` can be an inferred piece of state, and `edit_dashboard_mode/` won't be doing much else necessarily.

The location of `saved_off_filters` is also very much up for debate. I placed it beside `filters/` here to mimic a more recursive directory structure, where the edit version of any state is placed beside it, just as `saved_off_dashboard/` is placed beside `dashboards/`. The drawback is that `dashboards` is now no longer a clean representation of the exact state needed to render a dashboard; it now contains extra edit-related data. This issue is easily remedied through the use of selectors, but the directory may appear slightly polluted. The alternative is we place `saved_off_filters` a level up, either sibling to `dashboards/` or into `edit_dashboard_mode/`, as it is edit-related. I'd lean towards the latter. Given that the responsibility of `edit_dashboard_mode/` is to store edit-related data, this would make sense. The drawback being, however, that we break the pattern of storing edits beside their original.

The logic that the custom middleware accomplishes throughout this project can be successfuly replicated through the use of solely sagas, at only the cost of more boilerplate code.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
