var express = require('express');
var path = require('path');
var app = express()

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

var clientesRouter = require('./routes/clientesRouter')
//var produtosRouter = require('./routes/produtosRouter');
//var categoriasRouter = require('./routes/categoriasRouter');

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/clientes', clientesRouter)

app.use("/clientes", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use("/registrarcliente", clientesRouter)

//app.use('/meusprodutos', produtosRouter);
//app.use('/categorias', categoriasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err })
});



module.exports = app;