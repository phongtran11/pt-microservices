import { ConfigService } from '@nestjs/config';

export type TConfiguration = () => {
  mongodbUrl: string;
  portHTTPSService: string;
  appName: string;
  setAppName: (appName: string) => void;
  getAppName: () => string;
};

export type TConfigService = ConfigService<TConfiguration>;
