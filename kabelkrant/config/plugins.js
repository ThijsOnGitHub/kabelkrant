module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'thijs@thijsgeurts.nl',
        defaultReplyTo: 'thijsgeurts1@gmail.com',
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 200 * 1024 * 1024 * 1024,
      },
    },
  },
  "io": {
    "enabled": false,
    "config": {
      "IOServerOptions" :{
        "cors": { "origin": "http://localhost:5000", "methods": ["GET"] },
      },
      "contentTypes": {

      },
      "events":[
        {
          "name": "connection",
          "handler": ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
          },
        },
      ]
    },
  },
  // ...
});
