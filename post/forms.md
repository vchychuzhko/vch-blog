---
title: Property document.forms
description: Collection of all forms on the page
---

# Property document.forms

This is a read-only property of `document` object. It contains a collection of all `<form>` elements on the page.

## How to write

Collection can be accessed as a property of `document` object:

```js
const collection = document.forms
```

## How to use

For example, let's add 3 forms to our page:

```html
<form>
  <label for="promo">Promo</label>
  <input id="promo" type="text" name="promo" placeholder="WIN-1234" required>
  <button>Apply</button>
</form>
...
<form id="secondFormId">
  <label for="email">Email</label>
  <input id="email" type="email" name="email" placeholder="email@example.com" required>
  <button>Subscribe</button>
</form>
...
<form id="thirdFormId" name="thirdFormName">
  <label for="phone">Your phone number</label>
  <input id="phone" type="tel" name="phone" placeholder="776-2323" required>
  <button>Send</button>
</form>
```

By calling `forms` property we receive [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), which behaves mostly like an array, but also allows accessing elements my their name or identifier.

Forms that have `id` or `name` attributes, can be accessed by them. In other cases, form is available by index, that reflects forms order on the page.

### Access forms

First form does not have attributes, so the only way to access it is by index in collection:

```js
document.forms[0]
```

Second form has `id` attribute, so it can be accessed by this identifier or index:

```js
// By id
document.forms['secondFormId']
document.forms.secondFormId

// By index
document.forms[1]
```

Third form has both `id` and `name` attributes. We have an ability to call it by identifier, name and index:

```js
// By name
document.forms['thirdFormName']
document.forms.thirdFormName

// By id
document.forms['thirdFormId']
document.forms.thirdFormId

// By index
document.forms[2]
```

`id` and `name` attributes do not conflict, allowing access in both ways.

::: tip :bulb: TIP
Forms that have `name` attribute, are also mapped to `document` object. They can be accessed directly, bypassing `document.forms` collection:

```js
document.thirdFormName
```
:::

In case there are no `<form>` elements on the page, collection is still accessible, but empty.

### Interaction with forms

Elements in `document.forms` collection have [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) type and literally are links to respective `<form>` elements on the page.

For example, to get promo code from the first form we can write:

```js
const promoInput = document.forms[0].promo
const code = promoInput.value
```

Disable submit button for the second form:

```js
const submitButton = document.forms.secondFormId.querySelector('[type="submit"]')

submitButton.disabled = true
```

Or even trigger validation on the third form:

```js
document.forms.thirdFormName.reportValidity()
```

In other words, our interaction with forms and their fields is the same as with `<form>` element retrieved by selector.

## Understanding

All `<form>` elements on the page are observed by browser in real-time and are accessible by special property of `document` object. At any time, from any script, and regardless of the context.

Thanks to that, we have one more option to interact with forms bypassing any selectors.

This might come handy for global operations on the page. For example, to collect analytics or disable all forms submission due to connection lost.

One more advantage to use `<form>` tag :slightly_smiling_face:

## Practice tips

By analogy with the property `length` in array, we can get total number of forms on page:

```js
const numberOfForms = document.forms.length
```

---

You can walk through the collection with array methods, but firstly you should wrap it with `Array.from()` or use loop `for...of`:

```js
Array.from(document.forms).forEach((form) => {
  console.log(form)
})

for (const form of document.forms) {
  console.log(form)
}
```
