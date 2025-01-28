/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1135311916")

  // remove field
  collection.fields.removeById("file3150104748")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1135311916")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file3150104748",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
