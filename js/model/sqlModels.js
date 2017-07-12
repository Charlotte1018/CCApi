module.exports = function (db, models) {
    models.banner = db.define('Banner', {
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

    models.icolist = db.define('ICOList', {
        id: {type: 'serial', key: true},
        logoPath: {type: 'text', mapsTo: 'logoPath'},
        icoName: {type:'text', mapsTo: 'icoName'},
        status: {type:'text', mapsTo: 'status'},
        isRecommended: {type:'text', mapsTo: 'isRecommended'},
        startDate: {type:'text', mapsTo: 'startDate'},
        endDate: {type:'text', mapsTo: 'endDate'},
        description: {type:'text', mapsTo: 'description'},

        lastModifyDate: {type:'text', mapsTo: 'lastModifyDate'},
        lastModifyUser: {type:'text', mapsTo: 'lastModifyUser'}
    });

    models.icodetails = db.define('ICODetails', {
        id: {type: 'serial', key: true},
        icoID: {type: 'text', mapsTo: 'icoID'},
        icoPlatform: {type:'text', mapsTo: 'icoPlatform'},
        icoWebSite: {type:'text', mapsTo: 'icoWebSite'},
        icoLocation: {type:'text', mapsTo: 'icoLocation'},
        icoTotalSupply: {type:'text', mapsTo: 'icoTotalSupply'},
        icoWhitePaperPath: {type:'text', mapsTo: 'icoWhitePaperPath'},
        icoDistribution: {type:'text', mapsTo: 'icoDistribution'},
        icoTeamMember: {type:'text', mapsTo: 'icoTeamMember'},

        lastModifyDate: {type:'text', mapsTo: 'lastModifyDate'},
        lastModifyUser: {type:'text', mapsTo: 'lastModifyUser'}
    });

    models.eventlist = db.define('EventList', {
        id: {type: 'serial', key: true},
        eventName: {type: 'text', mapsTo: 'eventName'},
        eventDate: {type:'text', mapsTo: 'eventDate'},
        eventLocation: {type:'text', mapsTo: 'eventLocation'},
        eventURL: {type:'text', mapsTo: 'eventURL'},

        lastModifyDate: {type:'text', mapsTo: 'lastModifyDate'},
        lastModifyUser: {type:'text', mapsTo: 'lastModifyUser'}
    });

    models.user = db.define('USER', {
        id: {type: 'serial', key: true},
        name: {type: 'text', mapsTo: 'NAME'},
        email: {type:'text', mapsTo: 'EMAIL'},
        phone: {type:'text', mapsTo: 'PHONE'},
        password: {type:'text',mapsTo: 'PASSWORD'}
    });




    models.db = db;
};