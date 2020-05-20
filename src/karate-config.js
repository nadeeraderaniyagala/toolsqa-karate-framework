function fn() {
    karate.configure('ssl', true)
    karate.configure('connectTimeout', 8000);
    karate.configure('readTimeout', 8000);


    var baseUrl = 'http://bookstore.toolsqa.com';
    var bookstoreUrl = baseUrl + '/BookStore/v1/Books';

    var env = karate.env;
    karate.log('karate.env system property was:', env);


    if (!env) {
        env = 'uat';
    }

    var config = {
        env: env,

    };

    return config;

}
