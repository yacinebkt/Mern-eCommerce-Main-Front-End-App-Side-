export default (query) =>  {
    if (query) {
        const queryString = query.split('?')[1]
        if (queryString.length > 0 ) {
           const params = queryString.split("&");
           const paramsObject = {};
           params.forEach(param => {
                const keyValue = param.split("=");
                paramsObject[keyValue[0]] = keyValue[1];
           });

           return paramsObject;
        }
    }

    return {};
}