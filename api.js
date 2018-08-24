const model = require('./model');
const User = model.User;
const Exercise = model.Exercise;

function createGenericAPI(Model) {
    return {
        create(newData) {
            return new Promise(function (resolve, reject) {
                var model = new Model(newData);
                model.save(function (err, savedModel) {
                    if (!err) {
                        resolve(savedModel);
                    } else {
                        reject(err);
                    }
                })
            });
        },
        find(query) {
            return new Promise(function (resolve, reject) {
                Model.find(query, function (err, arr) {
                    if (!err) {
                        resolve(arr);
                    } else {
                        reject(arr);
                    }
                })
            });
        },
        update(id, updateData) {
            return new Promise(function (resolve, reject) {
                Model.findById(id, function (err, model) {
                    if (err) reject(err);
                    model.set(updateData);
                    model.save(function (err, updatedModel) {
                        if (err) reject(err);
                        resolve(updatedModel);
                    });
                });
            });
        },
        delete(id) {
            return new Promise(function (resolve, reject) {
                Model.findByIdAndRemove(id, function (err, model) {
                    if (!err) {
                        resolve(model);                        
                    } else {
                        reject(err);
                    }
                })
            });
        }
    }
}

const api = {
    User: createGenericAPI(User),
    Exercise: createGenericAPI(Exercise)
}

module.exports = api;