import * as React from 'react'
import { Button, ButtonGroup, ClickAwayListener, Grid } from '@material-ui/core'
import { Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const options = ["Python", "JavaScript", "Java"]

export default function Languages() {
    
const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef<HTMLDivElement>(null);
const [selectedIndex, setSelectedIndex] = React.useState(1);

const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
};

const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
};

const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
};

const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
};

const styles = {
  main :{
    transform: 'translateX(300px)',
  },
  btn: {
    backgroundColor: '#3a0ca3',
    color: '#fff',
    outline: 'none',
  }
}

 return(
     <Grid container direction="column" alignItems="center" style={styles.main}>
        <Grid item xs={12}>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick} style={styles.btn}>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                  style={styles.btn}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
     </Grid>
 )
}