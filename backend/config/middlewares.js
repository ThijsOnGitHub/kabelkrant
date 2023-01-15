module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      multiPart: true,
      formLimit: "1mb", // modify form body
      jsonLimit: "1mb", // modify JSON body
      textLimit: "1mb", // modify text body
      formidable: {
        maxFileSize: 200 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
