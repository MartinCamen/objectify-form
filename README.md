# form-objectification

A simple jQuery plugin for creating objects from form input values.

### Example

The HTML:
```
<form class="myform">
  <input type="text" name="firstname" id="fname" value="John" />
  <input type="text" name="lastname" id="lname" value="Doe" />
  <input type="submit" />
</form>
```

Your JS:
```javascript
var data = $('.myform').objectifyForm();
```

...which would result in a object looking something like:

```javascript
data = {
  'firstname' : 'John',
  'lastname'  : 'Doe'
};
```

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
  'lname' : 'Doe'
};
```

Easy, peasy.