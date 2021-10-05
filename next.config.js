module.exports = {
  /* config options here */
  webpack(config, { isServer, dev: isDevelopmentMode }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.module = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.po$/,
      use: [
        {
          loader: 'ignore-loader',
        },
      ],
    });

    // Attempt to ignore storybook files when doing a production build,
    // see also: https://github.com/vercel/next.js/issues/1914
    if (!isDevelopmentMode) {
      config.module.rules.push({
        test: /\.stories.(js|tsx?)/,
        loader: 'ignore-loader',
      });
    }

    return config;
  },
  poweredByHeader: false,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
};
