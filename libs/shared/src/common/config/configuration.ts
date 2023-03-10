import { TConfiguration } from './configuration.type';

export const Configuration: TConfiguration = () => ({
  mongodbUrl: process.env.MONGODB_URL,
  portHTTPSService: process.env.PORT_HTTPS_SERVICE,
  appName: '',
  getAppName: function () {
    return this.appName;
  }.bind(this),
  setAppName: function (appName: string) {
    this.appName = appName;
  }.bind(this),
});
