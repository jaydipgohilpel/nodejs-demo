//middleware
module.exports = reqFilter = (req, resp, next) => {
  console.log("reqFilter");
  if (!req.query.name) resp.send("<h1>plead provide name</h1>");
  else next();
};
