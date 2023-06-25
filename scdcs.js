/*
^https:\/\/nymfapp.com\/api\/(photos|posts|compose|stories)
*/
let string = $response.body;
string = string.replace(/"pro":true/g,'"pro":false');
$done({body: string});
