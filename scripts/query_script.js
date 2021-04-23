// Enter array of variables or column name
var input = ["owner_id","salutation","owner_name","owner_number","whatsapp_number","owner_email","owner_address","owner_password","owner_name1","owner_email1","owner_number1","country","account_name","bank_name","account_number","bank_ifsc","account_type","pan_number","pan_number1","aadhaar","aadhaar1","instruction","ref_name","ref_email","ref_number","ref_relation","ref_address","poa_name","poa_number","poa_email","poa_relation","poa_address","for_ref","addedon","status","sendmail","newsletter"];

//enter object name below
var objectId = "propertyOwnerReqData";
var tableName = "property_owner";

console.log(`UPDATE ${tableName} SET `);

for (var i = 0; i < input.length; i++) {
  console.log(`${input[i]}=?,`);
}
console.log(`WHERE owner_id=?`);

console.log("[");
for (var i = 0; i < input.length; i++) {
  console.log(objectId + "." + input[i] + ",");
}
console.log("]");
