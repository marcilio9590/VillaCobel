module.exports = function(app) {

    app.get(['/','/index', '/inicio'], function(req, res) {
        res.render('index/login');
    });

    app.get('/nova_venda', function(req, res) {
        res.render('/nova_venda');
    });

};