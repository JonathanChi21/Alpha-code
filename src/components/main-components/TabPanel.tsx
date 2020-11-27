import * as React from 'react'
import { Box, Typography } from '@material-ui/core'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export default function TabPanel(props: TabPanelProps) {

    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography style={{transform: 'translateX(-20px)'}}>{children}</Typography>
          </Box>
        )}
      </div>
    );
}