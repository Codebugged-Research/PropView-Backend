// Enter array of variables or column name
var input = [
];

//enter object name below
var objectId = "Object_Id";
console.log(
  `var ${objectId.substring(0, 1).toUpperCase()}${objectId
    .substring(1)
    .toString()} = (${objectId}) => {`
);
for (var i = 0; i < input.length; i++) {
  console.log("this." + input[i] + " = " + objectId + "." + input[i] + ";");
}
console.log("};");
