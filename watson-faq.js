const TelegramBot = require('node-telegram-bot-api');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
let context = {};

const watsonAssistant = new AssistantV1({ 
    "version": "2018-07-10",
    "iam_apikey": "9eAnenaeNKzNUnAe9v0eButFcn4QtjIdOSBomd5BPZJ8",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:conversation:us-south:a/dc08c554b2ce4a818b7c333b986933b1:478a6217-5a0c-4e11-b3a0-615ffc29c5ad::",
    "iam_apikey_name": "auto-generated-apikey-e1901c68-467d-4a87-979d-4bbb28b6508e",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/dc08c554b2ce4a818b7c333b986933b1::serviceid:ServiceId-25d58dcc-8e40-4b17-ad67-6fbe2776ed46",
    "url": "https://gateway.watsonplatform.net/assistant/api"  
});

const TOKEN = '777317438:AAEffNujujC4mUv10sQtz9-5bEAt9n4hJjI'

const bot = new TelegramBot(TOKEN, { polling: true })


bot.on('message', (msg) => {
  const params = {
    input: { text: msg.text },
    workspace_id: '60e2e671-ad13-4043-af75-0f9eed339d44',
    text: msg.text,
    context  
  };
  
  watsonAssistant.message(params, (err, response) => {
    if(err) {
      bot.sendMessage(msg.chat.id, 'Eita... deu algum  erro na API :S');
    }
    
    let dialogs = response.output.generic;
    context = response.context;
    
    dialogs.forEach(dialog => {    
        console.warn("\n" + JSON.stringify(response));
        switch (dialog.response_type) {
            case 'image': 
                const photo = dialog.source;
                bot.sendPhoto(msg.chat.id, photo, {caption: dialog.title});  
                break;
            case 'option':
                const options = {
                    reply_to_message_id: msg.message_id,
                    reply_markup: JSON.stringify({
                    keyboard: [
                        dialog.options.map(option => option.label)
                    ]
                    })
                };
                bot.sendMessage(msg.chat.id, 'Test?', options);
                break;
            case 'text':
                bot.sendMessage(msg.chat.id, response.output.text.join('\n'));  
                break;
        }
    });
  });
})
