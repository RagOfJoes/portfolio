import { extendTheme } from '@chakra-ui/react';

import foundations from './foundations';
import global from './global';

const theme = extendTheme(foundations, global);

export default theme;
