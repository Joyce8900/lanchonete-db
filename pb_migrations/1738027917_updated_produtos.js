/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1135311916")

  // remove field
  collection.fields.removeById("number1579384326")

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1579384326",
    "maxSize": 0,
    "name": "name",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1135311916")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number1579384326",
    "max": null,
    "min": null,
    "name": "name",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("editor1579384326")

  return app.save(collection)
})
