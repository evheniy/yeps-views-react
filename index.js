const debug = require('debug')('yeps:views:react');
const template = require('yeps-views-template');
const { resolve } = require('path');
const ReactDOM = require('react-dom/server');
const extensions = ['.es6', '.es', '.jsx', '.js'];
const presets = [ 'latest', 'react' ];

module.exports = (viewsPath, options = { presets, extensions }) => async context => {

    debug('View created!');
    debug('viewsPath: %s', viewsPath);
    debug(options);

    require('babel-register')(Object.assign({ only: viewsPath }, options));

    return template(context, async (path, parameters) => {
        try {

            const component = require(resolve(viewsPath, path));
            debug(component);

            const html = ReactDOM.renderToString(component.default(parameters));
            debug(html);

            return html;

        } catch (error) {

            debug(error);

            throw error;
        }
    });
};
