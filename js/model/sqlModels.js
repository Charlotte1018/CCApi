module.exports = function (db, models) {
    models.banner = db.define('BANNER', {
        id: {type: 'serial', key: true},
        name: {type: 'text', mapsTo: 'NAME'},
        path: {type:'text', mapsTo: 'path'},
        location: {type:'text', mapsTo: 'location'},
        status: {type:'text', mapsTo: 'status'},
        startDate: {type:'text', mapsTo: 'startDate'},
        endDate: {type:'text', mapsTo: 'endDate'},

        lastModifyDate: {type:'text', mapsTo: 'lastModifyDate'},
        lastModifyUser: {type:'text', mapsTo: 'lastModifyUser'}
    });

    models.db = db;
};