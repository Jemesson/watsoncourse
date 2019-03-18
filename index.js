const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const nlu = new NaturalLanguageUnderstandingV1({
  'version': '2018-04-05',
  "iam_apikey": "elkYJ_ttyMtmMskDElkcqaMK_SaWnKjkxsMXbzavPbPR",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:natural-language-understanding:us-south:a/dc08c554b2ce4a818b7c333b986933b1:403cc752-e1c1-4ddd-a3e4-f1eff6d93684::",
  "iam_apikey_name": "auto-generated-apikey-0b80a04a-3436-4360-b8a6-9951d57bc3f1",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/dc08c554b2ce4a818b7c333b986933b1::serviceid:ServiceId-a119b472-f2a9-4d34-b4f9-2e50a6c1f466",
  "url": "https://gateway.watsonplatform.net/natural-language-understanding/api"  
});

const text = "Medically, AIDS experts agree, the plan he announced in his State of the Union address in February is sound. It has twin goals: First, to get every American who is infected with the virus — an estimated 1.1 million people — onto three-drug cocktails that, if taken every day, suppress the virus, keeping patients healthy and reducing almost to zero the odds that they will infect anyone else.";

const options = {
  text,
  features: {
    entities: { },
    keywords: { },
    sentiment: { }
  }
}

nlu.analyze(options, (err, results) => {
  if (err) {
    console.error(err);
  }
  console.log(results);
});