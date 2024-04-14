import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tailwick.com',
  appName: 'tailwick',
  webDir: './dist/tailwick/browser',
  server: {
    androidScheme: 'http',
  },
};

export default config;
