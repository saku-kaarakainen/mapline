window.L.Toolbar2.EditAction = {
  fromHandler: function (Handler, defaultToolbarIcon, defaultSubToolbar) {
    return window.L.Toolbar2.Action.extend({
      options: {
        toolbarIcon: window.L.extend({}, window.L.Toolbar2.Action.prototype.options.toolbarIcon, defaultToolbarIcon),
        subToolbar: defaultSubToolbar ? defaultSubToolbar : window.L.Toolbar2.Action.prototype.options.subToolbar
      },

      initialize: function (map, featureGroup, options) {
        var action
        action = this

        options = options || {}
        options.featureGroup = featureGroup

        this._handler = new Handler(map, options)
        this._handler.on('disabled', function () {
          action.disable()
        })

        window.L.Toolbar2.Action.prototype.initialize.call(this, options)
      },

      enable: function (e) {
        this._handler.enable()
        window.L.Toolbar2.Action.prototype.enable.call(this, e)
      },

      disable: function () {
        this._handler.disable()
        window.L.Toolbar2.Action.prototype.disable.call(this)
      },

      setOptions: function (options) {
        this._handler.setOptions(options)
        window.L.Toolbar2.Action.prototype.setOptions.call(this, options)
      },

      // For the undo subaction.
      revertLayers: function () {
        this._handler.revertLayers()
      },

      // For the save subaction.
      save: function () {
        this._handler.save()
      }
    })
  }
}