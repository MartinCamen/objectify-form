# form-objectification

A simple jQuery plugin for creating objects from form input values.

### Example

The HTML:
```
<form class="myform">
  <input type="text" name="firstname" id="fname" value="John" />
  <input type="text" name="lastname" id="lname" value="Doe" />
  <input type="text" name="age" id="age" class="age" value="30" />
  <input type="submit" />
</form>
```

The JS:
```javascript
var data = $('.myform').objectifyForm();
```

...which would result in an object looking like:

```javascript
data = {
  'firstname' : 'John',
  'lastname'  : 'Doe',
  'age'       : '30'
};
```

#### Selector:

The plugin automatically goes for the `name` attribute but also accepts `id`:

```javascript
var data = $('.myform').objectifyForm({
  'selector' : 'id'
});
```

...which would result in the following object due to the example above:

```javascript
data = {
  'fname' : 'John',
  'lname' : 'Doe',
  'age'   : '30'
};
```

#### Exclusion of items:

Add items to the `exclude` array to exclude them from the data object.

```javascript
var data = $('.myform').objectifyForm({
  'exclude' : ['firstname']
});
```

...which would result in:

```javascript
data = {
  'lastname' : 'Doe',
  'age'      : '30'
};
```

It's also possible to exclude by `id` or by `class`, simply prepend with a `#` for id or `.` for class. It's possible to mix and match.

```javascript
var data = $('.myform').objectifyForm({
  'exclude' : [
    '#fname',   // by id
    'lastname', // by name
    '.age'      // by class
  ]
});
```

#### Checkboxes:

Checkboxes can be included or not, regardless of whether they're checked or not.
You can also specify whether you want the value of the checkboxes or a checked/not checked setting.

```javascript
var data = $('.myform').objectifyForm({
  'checkboxesAll'  : true, // If set to true, all checkboxes will be included. Default: true
  'checkboxesData' : 'boolean' // Other option is 'value'. Default: 'boolean'
});
```

#### Callbacks:

Possible callbacks are `before` and `after` which both has the `settings` and the `data` as parameters.

```javascript
var data = $('.myform').objectifyForm({
  before: function(settings, data) {
    // You can change the settings or append to the data here
    settings.selector = 'name';
    data.id = 2;
  },
  after: function(settings, data) {
    // Same thing here, but is called after the form has been processed
    if ( data.firstname === 'John' ) {
        data.firstname = 'Jane';
    }
  }
});
```

...which would result in something like:

```javascript
data = {
  'id'        : 2,
  'firstname' : 'Jane',
  'lastname'  : 'Doe',
  'age'       : '30'
};
```


That's it. Easy, peasy.
