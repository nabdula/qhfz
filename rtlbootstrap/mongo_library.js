// mongo_library.js: mfind, mupdate, mcount, mdelete, minsert

///////////////////////////////////////////////////////////////////////// FIND
/**
 * @param {String} collection Collection name eg. "ayas"
 * @param {Object} queryObject Search criteria eg. {aya_no: 1}
 * @param {Object} projectionObject OPTIONAL choose which fields to return eg. {aya_text: 1, aya_no: 1}
 */
const mfind = async (collection, queryObject, projectionObject) => {
  let mongoCollection;
  try {
    const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
    mongoCollection = mongodb.db("qur").collection(collection);
  } catch (err) {
    // $("#user").append("Need to login first.");
    console.error("Need to log in first", err);
    return;
  }

  if (projectionObject == undefined) {
    // aka no projection requested
    projectionObject = {};
  }
  // Retrieve
  return await mongoCollection.find(queryObject, {
    projection: projectionObject,
  });
};

///////////////////////////////////////////////////////////////////////// UPDATE
/**
 * @param {String} collection Collection name eg. "ayas"
 * @param {Object} findCriteria All that meet this criteria will be updated eg. {jozz_no: 1}
 * @param {Object} updateData what to upsert eg. {lastused: 123456789}
 */
const mupdate = async (collection, findCriteria, updateData) => {
  let mongoCollection;
  try {
    const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
    mongoCollection = mongodb.db("qur").collection(collection);
  } catch (err) {
    // $("#user").append("Need to login first.");
    console.error("Need to log in first", err);
    return;
  }

  // Update
  return await mongoCollection.updateMany(findCriteria, updateData, { upsert: true });
};

///////////////////////////////////////////////////////////////////////// COUNT
/**
 * @param {String} collection Collection name eg. "ayas"
 * @param {Object} countCriteria All docs that meet this criteria will be counted eg. {jozz_no: 1}
 */
const mcount = async (collection, countCriteria) => {
  let mongoCollection;
  try {
    const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
    mongoCollection = mongodb.db("qur").collection(collection);
  } catch (err) {
    // $("#user").append("Need to login first.");
    console.error("Need to log in first", err);
    return;
  }

  // Count
  return await mongoCollection.count(countCriteria);
};

///////////////////////////////////////////////////////////////////////// DELETE
/**
 * @param {String} collection Collection name eg. "ayas"
 * @param {Object} deletionCriteria All docs that meet this criteria will be deleted eg. {jozz_no: 1}
 */
const mdelete = async (collection, deletionCriteria) => {
  let mongoCollection;
  try {
    const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
    mongoCollection = mongodb.db("qur").collection(collection);
  } catch (err) {
    // $("#user").append("Need to login first.");
    console.error("Need to log in first", err);
    return;
  }

  // Delete
  return await mongoCollection.deleteMany(deletionCriteria);
};

///////////////////////////////////////////////////////////////////////// INSERT
/**
 * @param {String} collection Collection name eg. "ayas"
 * @param {Object} insertionDocument Object document to be inserted into collection
 */
const minsert = async (collection, insertionDocument) => {
    let mongoCollection;
    try {
      const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
      mongoCollection = mongodb.db("qur").collection(collection);
    } catch (err) {
      // $("#user").append("Need to login first.");
      console.error("Need to log in first", err);
      return;
    }
  
    // Insert
    return await mongoCollection.insertOne(insertionDocument);
  };