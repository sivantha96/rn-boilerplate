//  use these to get screen height and width

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};

export { Metrics };
