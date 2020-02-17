import device from '@system.device';

const HUAWEI_BRAND_CLASS = 'huawei';
const BRAND_LIST = ['huawei', 'HUAWEI', 'honor', 'HONOR'];
const DEFAULT_DEVICE_INFO = {
  brand: HUAWEI_BRAND_CLASS,
  fontScale: '',
};
/** 
* @description 使用 设备信息 接口
* miniplatformationversion 1030+
*/
export const Device = {
  getDeviceInfoSync: () => {
    try {
      var deviceInfo = device.getInfoSync();
      return Device.convertDeviceInfo(deviceInfo);
    } catch (e) {
      return DEFAULT_DEVICE_INFO;
    }
  },

  convertDeviceInfo: (deviceInfo) => {
    if (BRAND_LIST.indexOf(deviceInfo['brand']) === -1) {
      deviceInfo['brand'] = HUAWEI_BRAND_CLASS;
    }
    deviceInfo['fontScale'] = Device.convertfontScale(deviceInfo['fontScale']);
    return deviceInfo;
  },

  convertfontScale: (fontScale) => {
    var fontScaleStyle = '';
    switch (fontScale) {
      case 0.85:
        fontScaleStyle = 'small';
        break;
      case 1:
        fontScaleStyle = 'normal';
        break;
      case 1.15:
        fontScaleStyle = 'large';
        break;
      case 1.3:
        fontScaleStyle = 'super-large';
        break;
      case 1.30001:
        fontScaleStyle = '';
        break;
      case 1.45:
        fontScaleStyle = 'extra-large';
        break;
      default:
        fontScaleStyle = 'normal';
        break;
    }
    return fontScaleStyle;
  }
}


