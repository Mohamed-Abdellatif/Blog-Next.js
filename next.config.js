const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mabdellatif411',
        mongodb_password: 'cv1AmaXStthBF9OJ',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }

  return {
    env: {
        mongodb_username: 'mabdellatif411',
        mongodb_password: 'cv1AmaXStthBF9OJ',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog',
      },
  };
};