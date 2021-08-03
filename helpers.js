const sqldel = (shopifyId) => 'DELETE FROM products WHERE WixID =' + shopifyId + ';';
const sqlget = () => "SELECT * FROM products";

module.exports = { sqldel, sqlget };