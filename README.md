util.css
==========

常用样式合集, common style collection.

# Install

bower

```
bower install util.css
```

rails-assets

```
source 'https://rails-assets.org' do
  gem 'rails-assets-util.css'
end
```

Import util.css in `application.scss`

```scss
@import 'util.css.scss';
```

# Example

Using `util.css` instead of inline styles.

```html
<div class="f-l">
  <div class="m-h-10">
    <a class="red f-b">link</a>
  </div>
</div>
```

```html
<div style="float: left;">
  <div style="margin-left: 10px; margin-right: 10px;">
    <a style="color: red; font-weight: bold;">link</a>
  </div>
</div>
```


# Usage

### float

* **f-l**

  float: left;

* **f-r**

  float: right;

### text align

* **t-a-l**

  text-align: left;

* **t-a-r**

  text-align: right;

* **t-a-c**

  text-align: center;

### margin & padding

Size could be 0, 5, 10, 15, 20, 30, 40, 50, 100, 150, 200, 250, 300.

* __m-{n}__

  m-{n} => margin: {n}px;

* __m-h-auto__

  margin-left: auto;
  margin-right: auto;

* __m-h-\*__

  margin-left:  \*px;
  margin-rigth: \*px;

* __m-v-\*__

  margin-top:    \*px;
  margin-bottom: \*px;

* __m-t-\*__

  margin-top: \*px;

* __m-b-\*__

  margin-bottom: \*px;

* __m-l-\*__

  margin-left: \*px;

* __m-r-\*__

  margin-right: \*px;  

Except `m-h-auto`, padding usage is same with margin, such as `p-10` or `p-b-20`.

### color & background color

Color could be red, green, blue, white, black and gray.

`.{color}` will be `color: {color};`

Example

* red

  color: red;

* bg-green

  background-color: green;

### fonts

* __bold/f-b__

  font-weight: bold;

* __f-n__

  font-weight: normal;

### positions

* __p-f__

  position: fixed;

* __p-a__

  position: absolute;

* __p-s__

  position: static;
