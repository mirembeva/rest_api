module.exports = (app) => {
    require('./routes/users')(app);
    require('./routes/products')(app);
    require('./routes/sales')(app);
}