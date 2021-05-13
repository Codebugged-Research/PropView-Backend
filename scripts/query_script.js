// Enter array of variables or column name
var input = [
  "property_id",
  "property_for",
  "property_kind",
  "owner_id",
  "flag_category_id",
  "flag_id",
  "cid",
  "sid",
  "ccid",
  "locid",
  "socid",
  "property_type",
  "unit_no",
  "bhk",
  "demand",
  "demand_sale",
  "maintenance",
  "maintenance_type",
  "security_deposit",
  "bedrooms",
  "bathrooms",
  "balcony",
  "bhk_add",
  "super_area",
  "super_prefix",
  "carpet_area",
  "carpet_prefix",
  "floor_number",
  "total_floors",
  "parking_open",
  "parking_covered",
  "power_backup",
  "visiting_hours_from",
  "visiting_hours_from_prefix",
  "visiting_hours_to",
  "visiting_hours_to_prefix",
  "visiting_days",
  "bboys",
  "bgirls",
  "pets",
  "food_habit",
  "main_door_facing",
  "overlooking",
  "balcony_facing",
  "furnishing",
  "flats_floor",
  "ownership",
  "property_description",
  "property_detail",
  "property_detail_id",
  "propimage",
  "status",
  "added_by",
  "date_added",
  "user_id",
  "tenant_id",
  "broker_id",
  "rent_date",
  "rent_renewal_date",
  "inactive_date",
  "vacating_date",
  "first_inspection",
  "qtr1_inspection",
  "qtr2_inspection",
  "qtr3_inspection",
  "qtr4_inspection",
  "rent_payment_method",
  "rent_instructions",
  "general_instructions",
  "key_inventory",
  "broker_name",
  "last_inspection",
  "next_inspection",
  "construction_age",
  "additional_information",
  "more_information",
  "plot_area",
  "plot_area_prefix",
  "builtup_area",
  "builtup_area_prefix",
  "lockin",
];

//enter object name below
var objectId = "propertyReqData";
var tableName = "tableproperty";

var query = "";

console.log(`UPDATE ${tableName} SET `);

for (var i = 0; i < input.length; i++) {
  query = query + `${input[i]}=?,`;
  // console.log(`${input[i]}=?,`);
}
console.log(query);

console.log(`WHERE property_id=?`);

console.log("[");
for (var i = 0; i < input.length; i++) {
  console.log(objectId + "." + input[i] + ",");
}
console.log("]");
