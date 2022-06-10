(function () {
  'use strict';

  angular.module('lcma')
    .factory('UnderlyingService', function (DS, HistoryRefresh) {

      return DS.defineResource({
        name: 'underlyingService',
        endpoint: 'service',
        afterUpdate:  function (resource, data, cb) {
            HistoryRefresh.refresh();
            if (cb) {
                cb(null, data);
            }
        },
        afterCreate:  function (resource, data, cb) {
            HistoryRefresh.refresh();
            if (cb) {
                cb(null, data);
            }
        },
        afterDestroy:  function (resource, data, cb) {
            HistoryRefresh.refresh();
            if (cb) {
                cb(null, data);
            }
        },
        relations: {
          belongsTo: {
            inventory: {
              parent: true,
              localKey: 'inventory_id',
              localField: 'inventory'
            }
          }
        }
      });
    });

}());
