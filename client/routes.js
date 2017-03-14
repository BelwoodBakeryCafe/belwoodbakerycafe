const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

export default function createRoutes(store) {
    // create reusable async injectors using getAsyncInjectors factory
    return [
        //   {
        //     path: '/',
        //     name: 'App',
        //     getComponent(location, cb) {
        //         System.import('./containers/App')
        //             .then(loadModule(cb))
        //             .catch(errorLoading);
        //     },
        // }
    ];
}