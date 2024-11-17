import { HOME_HEADER_SUBTITLE, HOME_HEADER_TITLE } from '../constants';
import { Box, Text } from '@components';

export function HomeScreenListHeader() {
  return (
    <Box width={'100%'} my="sp5">
      <Box px="sp10">
        <Text
          preset="bold/30"
          letterSpacing={1.2}
          align="left"
          color="textPrimary"
          text={HOME_HEADER_TITLE}
        />
      </Box>

      <Box
        width={'100%'}
        alignItems="flex-start"
        justifyContent="center"
        padding="sp15">
        <Text preset="semiBold/16" text={HOME_HEADER_SUBTITLE} />
      </Box>
    </Box>
  );
}
