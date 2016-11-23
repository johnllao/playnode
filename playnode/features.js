(function () {

    const name = 'Playnode';
    const version = '1.0.0';

    const params = new Map();
    params.set('name', name);
    params.set('version', version);

    const title = `${name}\nversion ${version}`;
    console.log(title);
    console.log(`root: ${__dirname}`);


})();