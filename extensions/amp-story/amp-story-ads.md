# Advertising support in AMP Stories 

## AMP Story Ad Principles

The current ad ecosystem of banners and boxes doesn't integrate well with the rest of the content around it. Ads feel out of place, are slow and interruptive and don't feel native to the rest of the story experience.

We'd like to establish the following principles for Story Ads:

* Visual First:  Inviting, bold, context driven invitation state
* Native: The ad page has the same dimensions as an organic story page. 
* Same Interaction Model: User can continue to the next screen just like they would with an organic story page
* Fast: The ad will never appear to a user in a half-loaded state. 

As a result, one key difference from regular web pages is that the AMP Stories runtime determines the right placement of the ad page amidst the AMP Story. These mechanics are explained as part of [amp-story-auto-ads](./amp-story-auto-ads.md)


## Ad Formats
There are two type of ad formats supported as part of AMP Stories:

* Single Page Ad : Where the ad appears as a single page inside of an AMP story 
* Sponsored Story Ad: Where the ad is a stand-alone multi-page story.

### Single Page Ad 


In-line with the principles, a single page ad appears in between organic story content as a full page. 
Single Page Ads have a predefined set of call to action buttons and those call to action buttons take a web landing page URL where the user is navigated to, on click. 
![alt text](https://github.com/ampproject/amphtml/raw/master/extensions/amp-story/img/story-page-ad.png "Story Page Ad")


### Sponsored Story Ad 
When publishing sponsored story ads, use the `<amp-story ad>` tag instead of `<amp-story>`, so platforms can surface these stories appropriately. Since a Sponsored Story Ad is just a URL on the web, you can also send user traffic to a sponsored story ad from the CTA URL button of a single page ad. 
![alt text](https://github.com/ampproject/amphtml/raw/master/extensions/amp-story/img/sponsored-story-ad.png "Sponsored Story Ad")

## Consistent UX

The ad label and the call to action (CTA) buttons on the ads must be consistent across all publishers and ad networks. Therefore, the Stories runtime takes responsibility of rendering those in a consistent manner. 

![alt text](https://github.com/ampproject/amphtml/raw/master/extensions/amp-story/img/consistent-ux.png "Consistent Ad UX")


## Publisher placed ads 
This is an option for publishers who would like to place single page ads amidst AMP Story content they produce. This is meant as a stop-gap until more robust ad server support is available. 

This is done using the mechanism in [Custom ad](../../ads/custom.md) extension. The ads are rendered with inlined templates in the story document
and the data for the templates is fetched remotely.

### Template
An ad template must be written in [amp-mustache](../amp-mustache/amp-mustache.md).
For example:

```html
<template type="amp-mustache" id="template-1">
  <amp-img src="{{imgSrc}}"></amp-img>
  <amp-pixel src="{{impressionUrl}}"></amp-pixel>
</template>
```

A few important things to note: 

* Templates need to be inlined in the AMP Story, as direct children of a `<amp-story-auto-ads>` element.
* An element ID is required, so that the template can be referenced by the ad response.
* The selected template ID will be set as an attribute of `amp-ad`: `<amp-ad template="template-1">`
* The content inside a template should strictly follow the [rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-story/validator-amp-story.protoascii) of `amp-story-grid-layer`
* Be aware of the [restrictions](../amp-mustache/amp-mustache.md#restrictions) of `amp-mustache`.
* Ads that use different templates can be styled separately using CSS attribute selector:
```css
amp-ad[template=template-1] {
  background-color: blue;
}
amp-ad[template=template-2] {
  background-color: red;
}
```
- The CTA (call-to-action) button should NOT
be included in the template. Story defines a list of CTA buttons to select from.
For details, read the ["CTA ad" section](#cta-ad) below. 

### Ad response

#### Response payload
A server endpoint needs to provide ad responses in the following JSON format:

```js
{
  "templateId": "template-1",
  "data": {
    "imgSrc": "https://cdn.adserver.com/img-12345.jpg",
    "impressionUrl": "https://adserver.com/track?iid=18745543"
  },
  "var": {
    "ctaType": "EXPLORE",
    "ctaUrl": "https://advertiser.com/landing-123.html",
    "impressionId": "ac2d1s2E3B"
  }
}
```

* `templateId`: the ID of the inlined template that is going to be used.
* `data`: the data model to populate the selected template. The fields should match the variable names in the selected template.
* `var`: extra variables needed by the story. They will be added to the `amp-ad` element as data attributes, and picked by runtime for different use cases:
       * CTA button rendering (see details in the ["CTA ad" section](#cta-ad))
       * Provide dynamic content of the ad for tracking purpose (see details in the "tracking" section)

#### Response headers
The ad request will be an AMPCORS request, hence a couple of custom response headers are needed.
See [AMPCORS spec](../../spec/amp-cors-requests.md).

### Tagging

In AMP Story, you cannot put `amp-ad` directly onto the page, instead, all ads
are fetched & displayed by the [amp-story-auto-ads](./amp-story-auto-ads.md)
extension.

Here is a full example using `amp-story-auto-ads` together with some templates inlined.

```html
<amp-story>
  <amp-story-auto-ads>
     <script type=”application/json”>
       {
          "ad-attributes": {
            type: “custom”
            data-src: “https://adserver.com/getad?slot=abcd1234”
          }
       }
     </script>

     <template type="amp-mustache" id="template-1">
       <amp-img src="{{imgSrc}}"></amp-img>
       <amp-pixel src="{{impressionUrl}}"></amp-pixel>
     </template>

     <template type="amp-mustache" id="template-2">
       <div class="creative-line-1">{{creativeLine1}}</div>
       <div class="creative-line-2">{{creativeLine2}}</div>
       <amp-pixel src="{{impressionUrl}}"></amp-pixel>
     </template>
  </amp-story-auto-ads>
  ...
```

At runtime, an `amp-ad` element will be inserted dynamically:

```html
<amp-ad type="custom"
  data-src="https://adserver.com/getad?slot=abcd1234"
</amp-ad>
```

And an ad request will be made to this URL `https://adserver.com/getad?slot=abcd1234`.
Each story can only have one `amp-story-auto-ads` element.

### CTA ad
To provide a consistent user experience, the story runtime will be responsible to render 
the button of a CTA ad. The URL and button text will be provided in the `var` 
object of the ad response.

*  `ctaType`: the CTA button type, of which the value is an enum 
   * EXPLORE: "Explore Now"
   * SHOP: "Shop Now"
   * READ: "Read Now"
   * If you need support for a new CTA button, please open a [GitHub issue](https://github.com/ampproject/amphtml/issues/new)
* `ctaUrl`: the landing page URL for the CTA button

### Tracking
Each story page that is dynamically inserted for ad will be assigned with a system generated page ID, prefixed with `i-amphtml-AD-`. The `story-page-visible` trigger 
can be used to track ad views.

Also, ad response can leverage the `var` object to set data attributes to the `amp-ad` tag, to be used by amp-analytics as [data vars](../amp-analytics/analytics-vars.md#variables-as-data-attribute).


## AdServer Support for Story Ads 
AdServers that would like to support advertising for AMP Stories, please open a [GitHub issue](https://github.com/ampproject/amphtml/issues/new) and we'll be in touch. 
If you are a publisher, please reach out to your adserver regarding ad support for stories. 

