const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');

let classifiers = ['default','explicit', 'face'];

var threshold = 0.75;

// valid values en, ar, de, es, fr, it, ja, ko
var language = "en";

var visualRecognition = new VisualRecognitionV3({
  "version": '2018-03-19',
  "iam_apikey": "HK8z97OOSAMzzw_40OAkgvnpybLXmAWZ9h4JtvijMs-r",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:watson-vision-combined:us-south:a/dc08c554b2ce4a818b7c333b986933b1:c4d32a06-985c-416c-9f0f-88155738fac8::",
  "iam_apikey_name": "auto-generated-apikey-01111ce8-520c-48f7-986f-583192e80397",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/dc08c554b2ce4a818b7c333b986933b1::serviceid:ServiceId-9efc25e3-681b-4e2c-aa7f-08e8a707af68",
  "url": "https://gateway.watsonplatform.net/visual-recognition/api",
  "headers": {
        // Watson services log requests and their results to improve the services
        // for future users. The logged data is NOT shared or made public.
        // Set X-Watson-Learning-Opt-Out to true or 1 on each request that you
        // do not want IBM to access for general service improvements.
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

var params = {
  // images_file: fs.createReadStream('../data/images.zip'),
  url: 'http://wellingtoneuropeandayspa.com/wp-content/uploads/eminence-organics-acne-face-mapping.jpg',
  classifier_ids: classifiers,
  accept_language: language,
  threshold: threshold
};

visualRecognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 4));
  }
});