// source: archivo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.archivoProto.EmployeesRequest', null, global);
goog.exportSymbol('proto.archivoProto.EmployeesResponse', null, global);
goog.exportSymbol('proto.archivoProto.SalesRequest', null, global);
goog.exportSymbol('proto.archivoProto.SalesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.archivoProto.SalesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.archivoProto.SalesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.archivoProto.SalesRequest.displayName = 'proto.archivoProto.SalesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.archivoProto.SalesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.archivoProto.SalesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.archivoProto.SalesResponse.displayName = 'proto.archivoProto.SalesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.archivoProto.EmployeesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.archivoProto.EmployeesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.archivoProto.EmployeesRequest.displayName = 'proto.archivoProto.EmployeesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.archivoProto.EmployeesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.archivoProto.EmployeesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.archivoProto.EmployeesResponse.displayName = 'proto.archivoProto.EmployeesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.archivoProto.SalesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.archivoProto.SalesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.archivoProto.SalesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.SalesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.archivoProto.SalesRequest}
 */
proto.archivoProto.SalesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.archivoProto.SalesRequest;
  return proto.archivoProto.SalesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.archivoProto.SalesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.archivoProto.SalesRequest}
 */
proto.archivoProto.SalesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.archivoProto.SalesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.archivoProto.SalesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.archivoProto.SalesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.SalesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.archivoProto.SalesRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.SalesRequest} returns this
 */
proto.archivoProto.SalesRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.archivoProto.SalesRequest.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.SalesRequest} returns this
 */
proto.archivoProto.SalesRequest.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.archivoProto.SalesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.archivoProto.SalesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.archivoProto.SalesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.SalesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    supplier: jspb.Message.getFieldWithDefault(msg, 3, ""),
    itemCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    itemDescription: jspb.Message.getFieldWithDefault(msg, 5, ""),
    itemType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    retailSales: jspb.Message.getFieldWithDefault(msg, 7, ""),
    etailTransfers: jspb.Message.getFieldWithDefault(msg, 8, ""),
    warehouseSales: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.archivoProto.SalesResponse}
 */
proto.archivoProto.SalesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.archivoProto.SalesResponse;
  return proto.archivoProto.SalesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.archivoProto.SalesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.archivoProto.SalesResponse}
 */
proto.archivoProto.SalesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplier(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetailSales(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtailTransfers(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseSales(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.archivoProto.SalesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.archivoProto.SalesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.archivoProto.SalesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.SalesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSupplier();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getItemCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getItemDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getItemType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRetailSales();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEtailTransfers();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWarehouseSales();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.archivoProto.SalesResponse.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.archivoProto.SalesResponse.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string supplier = 3;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getSupplier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setSupplier = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string item_code = 4;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getItemCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setItemCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string item_description = 5;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getItemDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setItemDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string item_type = 6;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getItemType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setItemType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string retail_sales = 7;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getRetailSales = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setRetailSales = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string etail_transfers = 8;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getEtailTransfers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setEtailTransfers = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string warehouse_sales = 9;
 * @return {string}
 */
proto.archivoProto.SalesResponse.prototype.getWarehouseSales = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.SalesResponse} returns this
 */
proto.archivoProto.SalesResponse.prototype.setWarehouseSales = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.archivoProto.EmployeesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.archivoProto.EmployeesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.archivoProto.EmployeesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.EmployeesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    school: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.archivoProto.EmployeesRequest}
 */
proto.archivoProto.EmployeesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.archivoProto.EmployeesRequest;
  return proto.archivoProto.EmployeesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.archivoProto.EmployeesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.archivoProto.EmployeesRequest}
 */
proto.archivoProto.EmployeesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.archivoProto.EmployeesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.archivoProto.EmployeesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.archivoProto.EmployeesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.EmployeesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSchool();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.archivoProto.EmployeesRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.EmployeesRequest} returns this
 */
proto.archivoProto.EmployeesRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string school = 2;
 * @return {string}
 */
proto.archivoProto.EmployeesRequest.prototype.getSchool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesRequest} returns this
 */
proto.archivoProto.EmployeesRequest.prototype.setSchool = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.archivoProto.EmployeesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.archivoProto.EmployeesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.archivoProto.EmployeesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.EmployeesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    school: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jobDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    department: jspb.Message.getFieldWithDefault(msg, 4, ""),
    earnings: jspb.Message.getFieldWithDefault(msg, 5, ""),
    year: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.archivoProto.EmployeesResponse}
 */
proto.archivoProto.EmployeesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.archivoProto.EmployeesResponse;
  return proto.archivoProto.EmployeesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.archivoProto.EmployeesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.archivoProto.EmployeesResponse}
 */
proto.archivoProto.EmployeesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchool(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepartment(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEarnings(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.archivoProto.EmployeesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.archivoProto.EmployeesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.archivoProto.EmployeesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.archivoProto.EmployeesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchool();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJobDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDepartment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEarnings();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.archivoProto.EmployeesResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string school = 2;
 * @return {string}
 */
proto.archivoProto.EmployeesResponse.prototype.getSchool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setSchool = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string job_description = 3;
 * @return {string}
 */
proto.archivoProto.EmployeesResponse.prototype.getJobDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setJobDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string department = 4;
 * @return {string}
 */
proto.archivoProto.EmployeesResponse.prototype.getDepartment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string earnings = 5;
 * @return {string}
 */
proto.archivoProto.EmployeesResponse.prototype.getEarnings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setEarnings = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 year = 6;
 * @return {number}
 */
proto.archivoProto.EmployeesResponse.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.archivoProto.EmployeesResponse} returns this
 */
proto.archivoProto.EmployeesResponse.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.archivoProto);
