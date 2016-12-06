# node-yelp-fusion
Node.js module for interfacing with Yelp's API v3.0(Fusion)

## Install
```javascript
npm install node-yelp-fusion --save
```
## Usage
```javascript
var Yelp = require('yelp');
var yelp=new Yelp({ id:key , secret:secret });
```
###### [General search parameters](https://www.yelp.com/developers/documentation/v3/business_search)
```javascript
yelp.search("term=Biryani&location=New York")
    .then(function(result){
           res.json(result);
        });
```

###### [Phone search Parameters](https://www.yelp.com/developers/documentation/v3/business_search_phone)
```javascript
yelp.phoneSearch('phone=+12125551212')
    .then(function(result){
           res.json(result);
        });
```

###### [Transactions search Parameters](https://www.yelp.com/developers/documentation/v3/transactions_search)
```javascript
yelp.transactionSearch("delivery","location=New York")
    .then(function(result){
           res.json(result);
        });
```

###### [Business search Parameters](https://www.yelp.com/developers/documentation/v3/business)
```javascript
yelp.business("biryani-cart-new-york")
    .then(function(result){
           res.json(result);
        });
```

###### [Reviews Parameters](https://www.yelp.com/developers/documentation/v3/business_reviews)
```javascript
yelp.reviews("biryani-cart-new-york")
    .then(function(result){
           res.json(result);
        });
```

###### [Autocomplete Parameters](https://www.yelp.com/developers/documentation/v3/autocomplete)
```javascript
yelp.autoComplete("text=biryani&locale=en_SG")
    .then(function(result){
           res.json(result);
        });
```
###### References:
https://www.yelp.com/developers/documentation/v3/get_started
