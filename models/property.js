var dbConn = require("../config/database");

var Property = function (property) {
  this.property_id = property.property_id;
  this.property_for = property.property_for;
  this.property_kind = property.property_kind;
  this.owner_id = property.owner_id;
  this.flag_category_id = property.flag_category_id;
  this.flag_id = property.flag_id;
  this.cid = property.cid;
  this.sid = property.sid;
  this.ccid = property.ccid;
  this.locid = property.locid;
  this.socid = property.socid;
  this.property_type = property.property_type;
  this.unit_no = property.unit_no;
  this.bhk = property.bhk;
  this.demand = property.demand;
  this.demand_sale = property.demand_sale;
  this.maintenance = property.maintenance;
  this.maintenance_type = property.maintenance_type;
  this.security_deposit = property.security_deposit;
  this.bedrooms = property.bedrooms;
  this.bathrooms = property.bathrooms;
  this.balcony = property.balcony;
  this.bhk_add = property.bhk_add;
  this.super_area = property.super_area;
  this.super_prefix = property.super_prefix;
  this.carpet_area = property.carpet_area;
  this.carpet_prefix = property.carpet_prefix;
  this.floor_number = property.floor_number;
  this.total_floors = property.total_floors;
  this.parking_open = property.parking_open;
  this.parking_covered = property.parking_covered;
  this.power_backup = property.power_backup;
  this.visiting_hours_from = property.visiting_hours_from;
  this.visiting_hours_from_prefix = property.visiting_hours_from_prefix;
  this.visiting_hours_to = property.visiting_hours_to;
  this.visiting_hours_to_prefix = property.visiting_hours_to_prefix;
  this.visiting_days = property.visiting_days;
  this.bboys = property.bboys;
  this.bgirls = property.bgirls;
  this.pets = property.pets;
  this.food_habit = property.food_habit;
  this.main_door_facing = property.main_door_facing;
  this.overlooking = property.overlooking;
  this.balcony_facing = property.balcony_facing;
  this.furnishing = property.furnishing;
  this.flats_floor = property.flats_floor;
  this.ownership = property.ownership;
  this.property_description = property.property_description;
  this.property_detail = property.property_detail;
  this.property_detail_id = property.property_detail_id;
  this.propimage = property.propimage;
  this.status = property.status;
  this.added_by = property.added_by;
  this.date_added = property.date_added;
  this.user_id = property.user_id;
  this.tenant_id = property.tenant_id;
  this.broker_id = property.broker_id;
  this.rent_date = property.rent_date;
  this.rent_renewal_date = property.rent_renewal_date;
  this.inactive_date = property.inactive_date;
  this.vacating_date = property.vacating_date;
  this.first_inspection = property.first_inspection;
  this.qtr1_inspection = property.qtr1_inspection;
  this.qtr2_inspection = property.qtr2_inspection;
  this.qtr3_inspection = property.qtr3_inspection;
  this.qtr4_inspection = property.qtr4_inspection;
  this.rent_payment_method = property.rent_payment_method;
  this.rent_instructions = property.rent_instructions;
  this.general_instructions = property.general_instructions;
  this.key_inventory = property.key_inventory;
  this.broker_name = property.broker_name;
  this.last_inspection = property.last_inspection;
  this.next_inspection = property.next_inspection;
  this.construction_age = property.construction_age;
  this.additional_information = property.additional_information;
  this.more_information = property.more_information;
  this.plot_area = property.plot_area;
  this.plot_area_prefix = property.plot_area_prefix;
  this.builtup_area = property.builtup_area;
  this.builtup_area_prefix = property.builtup_area_prefix;
  this.lockin = property.lockin;
};

//Create Property
Property.saveProperty = (propertyReqData, result) => {
  dbConn.query(
    "INSERT INTO tableproperty SET ?",
    propertyReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get Property by PropertyId
Property.findPropertyByPropertyId = (propertyId, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
  ];
  dbConn.query(
    {
      sql: "SELECT * from tableproperty JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid  WHERE tableproperty.status=1 AND property_id=?",
      nestTables: true,
    },
    propertyId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};
//Get Property by OwnerId
Property.findPropertyByOwnerId = (ownerId, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
  ];
  dbConn.query(
    {
      sql: "SELECT * from tableproperty JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1 AND owner_id=?",
      nestTables: true,
    },
    ownerId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get All Properties
Property.findAllProperty = (result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM tableproperty JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1",
      nestTables: true,
    },
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Get All Properties - limit
Property.findAllPropertyLimit = (offset, limit, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
        { table: "property_owner", col: "owner_id" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM tableproperty JOIN property_owner ON tableproperty.owner_id = property_owner.owner_id JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1 LIMIT ?,?",
      nestTables: true,
    },
    [offset, limit],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Property.findAllUserProperty = (userId, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
        { table: "property_owner", col: "owner_id" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM tableproperty JOIN property_owner ON tableproperty.owner_id = property_owner.owner_id JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1 AND FIND_IN_SET(property_id, (SELECT property_id from tbl_user_to_property where user_id=?))",
      nestTables: true,
    },
    userId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

Property.findAllUserPropertyLimit = (userId, offset, limit, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
        { table: "property_owner", col: "owner_id" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
    { tableName: "property_owner", pkey: "owner_id" },
  ];
  dbConn.query(
    {
      sql: "SELECT * FROM tableproperty JOIN property_owner ON tableproperty.owner_id = property_owner.owner_id JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE status=1 AND FIND_IN_SET(property_id, (SELECT property_id from tbl_user_to_property where user_id=?)) LIMIT ?,?",
      nestTables: true,
    },
    [userId, offset, limit],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Update Properties
Property.findByIdAndUpdate = (propertyId, propertyReqData, result) => {
  dbConn.query(
    "UPDATE tableproperty SET property_id=?,property_for=?,property_kind=?,owner_id=?,flag_category_id=?,flag_id=?,cid=?,sid=?,ccid=?,locid=?,socid=?,property_type=?,unit_no=?,bhk=?,demand=?,demand_sale=?,maintenance=?,maintenance_type=?,security_deposit=?,bedrooms=?,bathrooms=?,balcony=?,bhk_add=?,super_area=?,super_prefix=?,carpet_area=?,carpet_prefix=?,floor_number=?,total_floors=?,parking_open=?,parking_covered=?,power_backup=?,visiting_hours_from=?,visiting_hours_from_prefix=?,visiting_hours_to=?,visiting_hours_to_prefix=?,visiting_days=?,bboys=?,bgirls=?,pets=?,food_habit=?,main_door_facing=?,overlooking=?,balcony_facing=?,furnishing=?,flats_floor=?,ownership=?,property_description=?,property_detail=?,property_detail_id=?,propimage=?,status=?,added_by=?,date_added=?,user_id=?,tenant_id=?,broker_id=?,rent_date=?,rent_renewal_date=?,inactive_date=?,vacating_date=?,first_inspection=?,qtr1_inspection=?,qtr2_inspection=?,qtr3_inspection=?,qtr4_inspection=?,rent_payment_method=?,rent_instructions=?,general_instructions=?,key_inventory=?,broker_name=?,last_inspection=?,next_inspection=?,construction_age=?,additional_information=?,more_information=?,plot_area=?,plot_area_prefix=?,builtup_area=?,builtup_area_prefix=?,lockin=? WHERE property_id=?",
    [
      propertyReqData.property_id,
      propertyReqData.property_for,
      propertyReqData.property_kind,
      propertyReqData.owner_id,
      propertyReqData.flag_category_id,
      propertyReqData.flag_id,
      propertyReqData.cid,
      propertyReqData.sid,
      propertyReqData.ccid,
      propertyReqData.locid,
      propertyReqData.socid,
      propertyReqData.property_type,
      propertyReqData.unit_no,
      propertyReqData.bhk,
      propertyReqData.demand,
      propertyReqData.demand_sale,
      propertyReqData.maintenance,
      propertyReqData.maintenance_type,
      propertyReqData.security_deposit,
      propertyReqData.bedrooms,
      propertyReqData.bathrooms,
      propertyReqData.balcony,
      propertyReqData.bhk_add,
      propertyReqData.super_area,
      propertyReqData.super_prefix,
      propertyReqData.carpet_area,
      propertyReqData.carpet_prefix,
      propertyReqData.floor_number,
      propertyReqData.total_floors,
      propertyReqData.parking_open,
      propertyReqData.parking_covered,
      propertyReqData.power_backup,
      propertyReqData.visiting_hours_from,
      propertyReqData.visiting_hours_from_prefix,
      propertyReqData.visiting_hours_to,
      propertyReqData.visiting_hours_to_prefix,
      propertyReqData.visiting_days,
      propertyReqData.bboys,
      propertyReqData.bgirls,
      propertyReqData.pets,
      propertyReqData.food_habit,
      propertyReqData.main_door_facing,
      propertyReqData.overlooking,
      propertyReqData.balcony_facing,
      propertyReqData.furnishing,
      propertyReqData.flats_floor,
      propertyReqData.ownership,
      propertyReqData.property_description,
      propertyReqData.property_detail,
      propertyReqData.property_detail_id,
      propertyReqData.propimage,
      propertyReqData.status,
      propertyReqData.added_by,
      propertyReqData.date_added,
      propertyReqData.user_id,
      propertyReqData.tenant_id,
      propertyReqData.broker_id,
      propertyReqData.rent_date,
      propertyReqData.rent_renewal_date,
      propertyReqData.inactive_date,
      propertyReqData.vacating_date,
      propertyReqData.first_inspection,
      propertyReqData.qtr1_inspection,
      propertyReqData.qtr2_inspection,
      propertyReqData.qtr3_inspection,
      propertyReqData.qtr4_inspection,
      propertyReqData.rent_payment_method,
      propertyReqData.rent_instructions,
      propertyReqData.general_instructions,
      propertyReqData.key_inventory,
      propertyReqData.broker_name,
      propertyReqData.last_inspection,
      propertyReqData.next_inspection,
      propertyReqData.construction_age,
      propertyReqData.additional_information,
      propertyReqData.more_information,
      propertyReqData.plot_area,
      propertyReqData.plot_area_prefix,
      propertyReqData.builtup_area,
      propertyReqData.builtup_area_prefix,
      propertyReqData.lockin,
      propertyId,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Delete Properties
Property.findByIdAndDelete = (propertyId, result) => {
  dbConn.query(
    "DELETE tableproperty where property_id=?",
    propertyId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = Property;
