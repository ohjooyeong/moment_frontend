import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'web';

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('web');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isMobile =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent,
      );

    if (isMobile) {
      setDeviceType('mobile');
    } else {
      setDeviceType('web');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
