function errorHandler({error}) {
    let errorReceived = error;
    if(errorReceived.length !== 0) {
        errorAlert(error);
    };
};