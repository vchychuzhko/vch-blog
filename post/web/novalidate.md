---
title: Attribute novalidate
description: Attribute that disables native form validation
---

# Attribute novalidate

This HTML attribute disables native browser form validation.

## How to write

Attribute is placed inside `<form>` opening tag, without any values:

```html
<form novalidate>...</form>
```

## How to use

Let's create a subscription form, with required email input:

```html
<form novalidate>
  <label for="email">Email</label>
  <input id="email" type="email" name="email" placeholder="email@example.com" required>
  <button>Subscribe</button>
</form>
```

Despite having a required input that is also marked as email, this form can be submitted without entering any data and without any warnings from the browser.

Once the attribute is removed, form submission is blocked and browser will prompt you to fill the input with the valid email address.

::: tip :bulb: TIP
Native validation is triggered only on form submission attempt.
:::

## What it solves

todo

## Understanding

Every input can have a type or validation rule. When user submits the forms, all of those types and rules are checked by browser, blocking the submission if any issues found.

Browsers even show hints where data should be corrected.

This attribute tells browser to stand down and do not interfere, as this is often a not preferred behavior if validation and form submission are handled by JavaScript.

This is a much better approach than removing `required` attributes or replacing `<form>` tag with `<div>`.

Attribute allows having accessible and semantically valid code, while keeping all the needed JavaScript logic.

## Practice tips

Regardless of whether `novalidate` attribute is present, pseudo-classes [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)/[`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) will be applied to inputs and the form itself.

---

Effect of `novalidate` is similar to [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formnovalidate) attribute, that can be added to submit button:

```html
<button formnovalidate>Submit</button>
```

It also tells browser to not trigger the validation.
