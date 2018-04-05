import {EventEmitter} from 'events';
import _ from 'lodash';

let EventHandler = _.extend({}, EventEmitter.prototype, {

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

export default EventHandler;
