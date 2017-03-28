const debug = require('debug')('yeps:views:react');
const { resolve } = require('path');
const ReactDOM = require('react-dom/server');
const extensions = ['.es6', '.es', '.jsx', '.js'];
const presets = [ 'latest', 'react' ];

module.exports = (viewsPath, options = { presets, extensions }) => async context => {

    debug('View created!');
    debug('viewsPath: %s', viewsPath);
    debug(options);

    context.renderToString = async (path, parameters) => {

        debug('renderToString');
        debug('path: %s', path);
        debug(parameters);

        try {

            require('babel-register')(Object.assign({ only: viewsPath }, options));

            const component = require(resolve(viewsPath, path));
            debug(component);

            const html = ReactDOM.renderToString(component.default(parameters));
            debug(html);

            return html;

        } catch (error) {
            debug(error);

            throw error;
        }
    };

    context.render = async (path, parameters) => {

        debug('render');
        debug('path: %s', path);
        debug(parameters);

        context.statusCode = 200;
        context.res.end(await context.renderToString(path, parameters));

        return Promise.resolve();
    };
};
