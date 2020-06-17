# dash_extra_ui_components

dash_extra_ui_components is a Dash component library.

Get started with:
1. Install Dash and its dependencies: https://dash.plot.ly/installation
2. `pip install dash_extra_ui_components`
3. Run `python usage.py`
4. Visit http://localhost:8080 in your web browser

## Available components

1. Carousel: https://github.com/primefaces/primereact
2. Geolocator: https://github.com/no23reason/react-geolocated
3. ListBox: https://github.com/primefaces/primereact
4. MenuBar: https://github.com/primefaces/primereact
5. Mic: https://github.com/hackingbeauty/react-mic
6. OrganizationChart: https://github.com/primefaces/primereact
7. PDFViewer: https://github.com/wojtekmaj/react-pdf
8. Paginator: https://github.com/primefaces/primereact
9. PanelMenu: https://github.com/primefaces/primereact
10. Rating: https://github.com/primefaces/primereact
11. Steps: https://github.com/primefaces/primereact
12. Trello: https://github.com/rcdexta/react-trello
13. Webcam: https://github.com/mozmorris/react-webcam
14. User Activity (IdleTimer): https://github.com/SupremeTechnopriest/react-idle-timer

Current implementation is not complete and some components might be only partially functional.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.
    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```
    _Note: venv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

### Write your component code in `src/lib/components/ExtraDashUiComponents.react.js`.

- The demo app is in `src/demo` and you will import your example component code into your demo app.
- Test your code in a Python environment:
    1. Build your code
        ```
        $ npm run build
        ```
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```
- Write tests for your component.
    - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    - Run the tests with `$ pytest tests`.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`dash_extra_ui_components`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `dash_extra_ui_components/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    $ npm run build
    ```
2. Create a Python tarball
    ```
    $ python setup.py sdist
    ```
    This distribution tarball will get generated in the `dist/` folder

3. Test your tarball by copying it into a new environment and installing it locally:
    ```
    $ pip install dash_extra_ui_components-0.0.1.tar.gz
    ```

4. If it works, then you can publish the component to NPM and PyPI:
    1. Publish on PyPI
        ```
        $ twine upload dist/*
        ```
    2. Cleanup the dist folder (optional)
        ```
        $ rm -rf dist
        ```
    3. Publish on NPM (Optional if chosen False in `publish_on_npm`)
        ```
        $ npm publish
        ```
        _Publishing your component to NPM will make the JavaScript bundles available on the unpkg CDN. By default, Dash serves the component library's CSS and JS locally, but if you choose to publish the package to NPM you can set `serve_locally` to `False` and you may see faster load times._

5. Share your component with the community! https://community.plot.ly/c/dash
    1. Publish this repository to GitHub
    2. Tag your GitHub repository with the plotly-dash tag so that it appears here: https://github.com/topics/plotly-dash
    3. Create a post in the Dash community forum: https://community.plot.ly/c/dash
# dash_extra_ui_components
