import react from 'react'
import ReactDOM, { render } from 'react-dom';
import { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
export default function Sudoku() {
    const [size, setSize] = useState();
    const [mapsize, setmapSize] = useState();
    const [random, setRandom] = useState();
    var map2 = [
        [1, 2, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    var map3 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    var map4 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    // var map5 = [
    //     [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    //     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 1, 2, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 16, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    function get_next(m, x, y, sized) {
        // console.log("x:" + x + " y :" + y)
        for (let next_2y = y + 1; next_2y < sized * sized; next_2y++) {
            // console.log("nextx:" + x + " next_y :" + y)
            if (m[x][next_2y] == 0) {
                return [x, next_2y]
            }
        }
        for (let next_x = x + 1; next_x < sized * sized; next_x++) {
            // console.log(" next_y :" + y)
            for (var next_3y = 0; next_3y < sized * sized; next_3y++) {
                if (m[next_x][next_3y] == 0) {
                    return [next_x, next_3y]
                }
            }
        }
        return [-1, -1]
    }
    function list(iterable) {
        return [...iterable];
    }

    function value(m, x, y, sized) {
        var i = parseInt(x / sized)
        var j = parseInt(y / sized)

        var grid = []
        for (let r = 0; r < sized; r++) {
            for (let c = 0; c < sized; c++) {
                // console.log("m:" + m + " x:" + x + " y:" + y)
                // console.log("i:" + i + " sized:" + sized + " r:" + r)
                // console.log("this m0:" + m[0])
                var num1 = parseInt(i * sized + r)
                var num2 = parseInt(j * sized + c)
                // console.log("num1 :" + num1 + " num2 :" + num2 + " this m(num1):" + m[0][1])
                grid.push(m[num1][num2])
            }
        }
        // console.log(sized)
        // console.log(grid)
        var set = {};
        var set2 = {};
        var set3 = {};
        for (var d = 0; d < grid.length; d++)
            set[grid[d]] = true;
        var g = [];
        for (var item in set)
            g.push(item);
        // console.log("set grid: ")
        // console.log(g)

        for (var d2 = 0; d2 < m[x].length; d2++) {
            // console.log(m[x][d2])
            set2[m[x][d2]] = true;
        }
        var Themx = [];
        for (var itemed in set2)
            Themx.push(itemed);
        // console.log("set m[x]: ")
        // console.log(Themx)


        for (var d3 = 0; d3 < m[x].length; d3++) {
            // console.log(m[d3][y])
            set3[m[d3][y]] = true;
        }
        var Themy = [];
        // console.log(set3)
        for (var items in set3)
            Themy.push(items);
        // console.log('set m[y]')
        // console.log(Themy)

        var mapx = []
        for (let x1 = 1; x1 < sized * sized + 1; x1++) {
            mapx.push(x1)
        }
        // console.log("mapx value:" + mapx)
        var v = [];
        // var test=mapx-g-Themx-Themy
        for (const testdata of mapx) {
            if (!g.includes(testdata.toString()) && !Themx.includes(testdata.toString()) && !Themy.includes(testdata.toString())) {
                // console.log(testdata)
                v.push(testdata)
            }
        }
        // console.log("v is coming")
        // console.log(list(v))
        return list(v)
    }


    function try_sudoku(m, x, y, sized) {
        /*console.log("checklist: " + checklist[0])
        if (!checklist.includes(checklist[x])) {
            console.log("checklist: " + checklist[1])
            checklist.push([x, y])
            console.log("checklistAFTER PUSH: " + checklist)
            console.log("try_sudoku: " + x + " " + y)
        }*/
        for (const v of value(m, x, y, sized)) {
            maps[x][y] = v
            // console.log("this is mx:" + x)
            // console.log("this is my:" + y)
            // console.log("this is map[x][y]:")
            // console.log(map[x][y])
            var next_x = get_next(m, x, y, sized)[0]
            var next_y = get_next(m, x, y, sized)[1]
            // console.log("this is getnext:" + get_next(m, x, y, sized))

            // console.log("this is next_x:" + next_x)
            // console.log("this is next_y:" + next_y)
            // console.log("x的值"+next_x)
            // console.log("y的值"+next_y)
            if (next_y == -1) {
                return true
            }
            else {
                var end = try_sudoku(m, next_x, next_y, sized)

                // console.log("back")
                if (end) {
                    return true
                }
                m[x][y] = 0

            }
        }

    }

    const [maps, setMap] = useState(map3);
    const [mapend, setMapend] = useState([]);
    const [displayend, setDisplay] = useState(false)
    const [displaycalculate,setdisplaycalculate]=useState(false)
    const handledatachange = (detailindex, index) => e => {
        console.log('detailindex: ' + detailindex);
        console.log('property detail: ' + e.target.value);

        console.log('property index: ' + index);
        let newArr = [...maps]; // copying the old datas array
        newArr[index][detailindex] = e.target.value; // replace e.target.value with whatever you want to change it to
        console.log('property detail: ' + newArr);
        setMap(newArr)
    }
    function start_pos(m, sized, checklist = []) {
        // """ 功能：返回第一个空白格的位置坐标"""
        for (var x = 0; x < sized * sized; x++) {
            for (var y = 0; y < sized * sized; y++) {
                if (parseInt(m[x][y]) == 0) {
                    // console.log([x, y])
                    try_sudoku(maps, x, y, sized)

                    setMapend(maps)
                    for (var index = 0; index < maps.length; index++) {

                        console.log("mapdetail " + maps[index])

                    }
                }
            }
        }
        return false
    }
    function Start(m, sized) {
        start_pos(m, sized)

    }


    return (
        <body style={{ backgroundColor: 'rgb(146, 168, 209)', height: '100%' }}>
            <div style={{ textAlign: 'center' }}>
                <div > <label onClick={() => Start(maps, size)} >请选择你想要的数独size: {random}</label></div>

                <div onClick={() => setDisplay(false)} style={{ display: displayend == true ? 'none' : 'block' }} > <div onClick={() => setdisplaycalculate(true)} > <div onClick={() => setMap(map2)} ><Button onClick={() => setSize(2)} variant="outlined" style={{ width: "25%" }}>2x2</Button></div></div></div>
                <div onClick={() => setDisplay(false)} style={{ display: displayend == true ? 'none' : 'block' }} > <div onClick={() => setdisplaycalculate(true)} > <div onClick={() => setMap(map3)} > <Button variant="outlined" onClick={() => setSize(3)} style={{ width: "25%" }}>3x3</Button></div></div></div>
                <div onClick={() => setDisplay(false)} style={{ display: displayend == true ? 'none' : 'block' }} > <div onClick={() => setdisplaycalculate(true)} >  <div onClick={() => setMap(map4)} > <Button variant="outlined" onClick={() => setSize(4)} style={{ width: "25%" }}>4x4</Button></div></div></div>

                <div onClick={() => setdisplaycalculate(false)} >   <div onClick={() => setDisplay(true)} style={{ display:displaycalculate ==false?'none': 'block'}} ><Button onClick={() => Start(maps, size)} variant="outlined" color="error" >开始计算</Button> </div></div>
                <div style={{ display: displayend == true ? 'block':'none'  }}><Button onClick={() => window.location.reload()} variant="outlined" color="error" >重新开始</Button> </div>
                <div>{size}</div>
                <Grid xs={12} container justifyContent='center' alignItems='center'>
                    <table style={{ display: size == 2 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3].map((theD, theI) => (
                            maps.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 2 == 1 ?
                                            <th style={{ borderRight: detailindex % 2 == 1 ? '5px solid black' : '', borderLeft: detailindex % 2 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultValue={detail == 0 ? ' ' : detail} style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 2 == 1 ? '5px solid black' : '', borderLeft: detailindex % 2 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 2 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultvalue={detail == 0 ? ' ' : detail} style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                    <Typography variant="h4" color='red' style={{ display: displayend == true && size == 2 ? 'block' : 'none' }}>result&gt; &gt; &gt; &gt; </Typography>
                    <table style={{ display: displayend == true && size == 2 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3].map((theD, theI) => (
                            mapend.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 2 == 1 ?
                                            <th style={{ borderRight: detailindex % 2 == 1 ? '5px solid black' : '', borderLeft: detailindex % 2 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}><input defaultValue={detail == 0 ? ' ' : detail} disabled style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 2 == 1 ? '5px solid black' : '', borderLeft: detailindex % 2 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 2 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}><input disabled defaultValue={detail == 0 ? ' ' : detail} style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                </Grid>
                <Grid xs={12} container justifyContent='center' alignItems='center'>
                    <table style={{ display: size == 3 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((theD, theI) => (
                            maps.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 3 == 2 ?
                                            <th style={{ borderRight: detailindex % 3 == 2 ? '5px solid black' : '', borderLeft: detailindex % 3 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultValue={detail == 0 ? ' ' : detail} style={{ border: '5px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 3 == 2 ? '5px solid black' : '', borderLeft: detailindex % 3 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 3 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultvalue={detail == 0 ? ' ' : detail} style={{ border: '5px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                    <Typography variant="h4" color='red' style={{ display: displayend == true && size == 3 ? 'block' : 'none' }}>result&gt; &gt; &gt; &gt; </Typography>
                    <table style={{ display: displayend == true && size == 3 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((theD, theI) => (
                            mapend.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 3 == 2 ?
                                            <th style={{ borderRight: detailindex % 3 == 2 ? '5px solid black' : '', borderLeft: detailindex % 3 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}><input defaultValue={detail == 0 ? ' ' : detail} disabled style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 3 == 2 ? '5px solid black' : '', borderLeft: detailindex % 3 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 3 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}><input disabled defaultValue={detail == 0 ? ' ' : detail} style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                </Grid>
                <Grid xs={12} container justifyContent='center' alignItems='center'>
                    <table style={{ display: size == 4 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((theD, theI) => (
                            maps.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 4 == 3 ?
                                            <th style={{ borderRight: detailindex % 4 == 3 ? '5px solid black' : '', borderLeft: detailindex % 4 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultValue={detail == 0 ? ' ' : detail} style={{ border: '5px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 4 == 3 ? '5px solid black' : '', borderLeft: detailindex % 4 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 4 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}>
                                                <input onChange={handledatachange(detailindex, theI)} type="text" defaultvalue={detail == 0 ? ' ' : detail} style={{ border: '5px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                    <Typography variant="h4" color='red' style={{ display: displayend == true && size == 4 ? 'block' : 'none' }}>result&gt; &gt; &gt; &gt; </Typography>
                    <table style={{ display: displayend == true && size == 4 ? 'block' : 'none', border: '1px solid white' }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((theD, theI) => (
                            mapend.slice(theD, theD + 1).map((item, index) => (
                                <tr>
                                    {item.map((detail, detailindex) => (
                                        theI % 4 == 3 ?
                                            <th style={{ borderRight: detailindex % 4 == 3 ? '5px solid black' : '', borderLeft: detailindex % 4 == 0 ? '5px solid black' : '', borderBottom: '5px solid black', height: '30px', width: '30px' }} key={detailindex}><input defaultValue={detail == 0 ? ' ' : detail} disabled style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>
                                            :
                                            <th style={{ borderRight: detailindex % 4 == 3 ? '5px solid black' : '', borderLeft: detailindex % 4 == 0 ? '5px solid black' : '', borderBottom: '', borderTop: theI % 4 == 0 ? '5px solid black' : '', height: '30px', width: '30px' }} key={detailindex}><input disabled defaultValue={detail == 0 ? ' ' : detail} style={{ border: '1px solid white', height: '30px', width: '30px', textAlign: 'center' }} /></th>

                                    ))}
                                </tr>
                            ))))
                        }
                    </table>
                </Grid>

            </div>
        </body>

    )
}