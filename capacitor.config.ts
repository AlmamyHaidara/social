import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tailwick.com',
  appName: 'tailwick',
  webDir: './dist/tailwick/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
