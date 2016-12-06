var axios=require('axios');
var querystring=require('querystring');

function YelpFusion(config){

    this.client_id=config.id;
    this.client_secret=config.secret;
    this.accessTokenUrl="https://api.yelp.com/oauth2/token";
    this.apiUrl="https://api.yelp.com/v3/";
    this.tokenType=null;
    this.tokenSecret=null;

}

YelpFusion.prototype.getAccessToken = function getAccessToken(){

    return new Promise(function(resolve,reject){

        axios.post(this.accessTokenUrl,querystring.stringify({

                client_id: this.client_id,

                client_secret: this.client_secret


        })).then(function(response) {

            this.tokenType=response.data.token_type;

            this.tokenSecret=response.data.access_token;

            resolve("Sucess");

        }.bind(this)).catch(function(err){

            reject(err);

        });

    }.bind(this));

};

YelpFusion.prototype.getYelp = function getYelp(getMe){

    return new Promise(function(resolve,reject){
        
        axios.get(this.apiUrl+getMe,{

             headers:{

                 "Authorization" : this.tokenType+" "+this.tokenSecret

             }

         })
         .then(function(response) {

                resolve(response.data);

         })
         .catch(function(err){

             reject(err);

         });

    }.bind(this));

};

YelpFusion.prototype.fetch = function search(type,params){

    return new Promise(function(resolve,reject){

        this.getAccessToken()

        .then(function(result){

            this.getYelp(type+params)
                                .then(function(result){

                                    resolve(result);

                                })
                                .catch(function(err){

                                    reject(err);

                                });
        }.bind(this))

        .catch(function(err){

            reject(err);

        });

    }.bind(this));

};

    YelpFusion.prototype.search = function search(params) {
        return this.fetch('businesses/search?', params);
    };

    YelpFusion.prototype.phoneSearch = function phoneSearch(params) {
        return this.fetch('businesses/search/phone?', params);
    };

    YelpFusion.prototype.transactionSearch = function (transactionType, params) {
        return this.fetch("transactions/"+transactionType+"/search?", params);
    };

    YelpFusion.prototype.business = function business (param) {
        return this.fetch("businesses/",param);
    };

    YelpFusion.prototype.reviews = function reviews (param) {
        return this.fetch("businesses/",param+"/reviews");
    };

    YelpFusion.prototype.autoComplete = function autoComplete (params) {
        return this.fetch('autocomplete?', params);
    };


module.exports = YelpFusion;
