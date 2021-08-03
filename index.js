const { delHanabom } = require("./hanabomAPI");
const { dbAction, dbEnd } = require("./db");
const helpers = require("./helpers");

const handler = async (event) => {
  // Get Wix Created Item and Upload on Hanabom
  const shopifyBody = JSON.parse(event.body);
  const shopifyId = shopifyBody.id;

  // Delete Item From Hanabom
  const sql = helpers.sqlget();

  dbAction(sql, results => results.forEach(element => {
    if(element.wixId == shopifyId){
        console.log("ID exist on DB... Removing hanabom Product", element.hanaId);
        delHanabom(element.hanaId);
    }
  }));
  
  // Delete From DB
//   const sql = helpers.sqldel(eventId);

  // dbAction(sql, (results) => {
  //   return results;
  // });

  dbEnd();

  // return code
  const response = {
    statusCode: 200,
    body: JSON.stringify("Product Deletion Implemented"),
  };
  return response;
};

exports.handler = handler;