import { Button } from '@material-ui/core';
import React, {useState} from 'react'
import {SketchField, Tools} from 'react-sketch';
import "./Whiteboard.css";
import InputColor from 'react-input-color';
import {ImPencil2} from 'react-icons/im';
import {MdLinearScale} from 'react-icons/md';
import {BiRectangle} from 'react-icons/bi';
import {BsCircle} from 'react-icons/bs';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {GrClear} from 'react-icons/gr';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createTheme({
    overrides:{
      MuiSlider: {
        thumb:{
        color: "black",
        },
        track: {
          color: 'white'
        },
        rail: {
          color: 'black'
        }
      }
  }
});

const useStyles = makeStyles({
    root: {
      width: 50,
    },
});

export const Demo = () => {
    const [tooltype, settooltype] = useState(Tools.Pencil);
    const [toolcolor, settoolcolor] = useState('black');
    const [toolwidth, settoolwidth] = useState(3);
    const [toolval, settoolval] = useState({});
    const classes = useStyles();
    function valuetext(value) {
        settoolwidth(value);
        return `${value}`;
    }
    return (
        <div>
            <SketchField 
                height='100vh'
                width='100vw' 
                tool={tooltype} 
                lineColor={toolcolor.rgba}
                lineWidth={toolwidth}
                value={toolval}
            />
            <div id = "tray">
                <Button onClick={() => settooltype(Tools.Pencil)}><ImPencil2 size = {30} color="white"/></Button>
                <Button onClick={() => settooltype(Tools.Line)}><MdLinearScale size={35} color="white"/></Button>
                <Button onClick={() => settooltype(Tools.Rectangle)}><BiRectangle size = {30} color="white"/></Button>
                <Button onClick={() => settooltype(Tools.Circle)}><BsCircle size = {30} color="white"/></Button>
                <Button>
                    <div style = {{display: 'block'}}>
                    <InputColor
                        initialValue="#ffffff"
                        onChange={settoolcolor}
                    />
                    </div>
                </Button>
                <Button>
                    <div className={classes.root}>  
                    <ThemeProvider theme={muiTheme}>
                        <Slider
                            defaultValue={3}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={10}
                        />
                    </ThemeProvider>
                    </div>
                </Button>
                <Button onClick={() => settooltype(Tools.Pan)}><GiMagnifyingGlass size = {30} color="white"/></Button>
                <Button onClick={() => {settoolval({})}}><GrClear size = {30} color="white"/></Button>
            </div>
        </div>
    )
};