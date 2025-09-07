  
  // ./config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),        // aka API Key
        api_secret: env('CLOUDINARY_SECRET'),  // aka API Secret
      },
      actionOptions: {
        upload: {
          // optional niceties:
          folder: env('CLOUDINARY_FOLDER', 'strapi'),
          // If you plan to upload videos too:
          // resource_type: 'auto'
        },
        uploadStream: {},
        delete: {},
      },
    },
  },
});
