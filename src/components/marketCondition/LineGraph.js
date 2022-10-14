import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {useState, useEffect } from "react";
import axios from 'axios';

let options = {
    spanGaps: true,
}

function LineGraph(props){
    let [data,setData] = useState({
        labels: null,
        datasets: [null
            // {
            //     type: 'line',
            //     label: 'Dataset 1',
            //     borderColor: 'rgb(54, 162, 235)',
            //     borderWidth: 2,
            //     data: null,
            // },
            // {
            //     type: 'line',
            //     label: 'Dataset 2',
            //     borderColor: 'rgb(75, 192, 192)',
            //     borderWidth: 2,
            //     data: null,
            // },
        ],
    })

    //console.log(props);

    useEffect(() => {
        let arr = null;
        let tempArr1 = [];
        let tempArr2 = [{
            type: 'line',
            label: '소매 시세',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [],
        }];
        let tempArr3 = [{
            type: 'line',
            label: '도매 시세',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            data: [],
        }];
        
        console.log(props);

        if(props.data[0] == "일간-소매"){
            axios
                .get("http://localhost:8080/api/wholesale-and-retail/day/retail",
                {params: {
                    start: props.data[2][0],
                    end: props.data[2][1],
                    kindGradeId: 432,
                }}, 
                { withCredentials: false })
                .then((res) => {
                    
                    arr = res.data.data.item.filter((i) => i.countyname == "평균");
                    for(let i = 0; i < arr.length; i++){
                        tempArr1 = tempArr1.concat(arr[i].yyyy + "/" + arr[i].regday);
                        tempArr2[0].data = tempArr2[0].data.concat(arr[i].price.replace(/,/gi,""));
                    }
                    console.log(tempArr2);
                    setData({"labels":tempArr1, "datasets":tempArr2,});
                })
                .catch((err) => console.log(err));
        }
        else if(props.data[0] == "일간-도매"){
            axios
                .get("http://localhost:8080/api/wholesale-and-retail/day/wholesale",
                {params: {
                    start: props.data[2][0],
                    end: props.data[2][1],
                    kindGradeId: 432,
                }}, 
                { withCredentials: false })
                .then((res) => {
                    
                    arr = res.data.data.item.filter((i) => i.countyname == "평균");
                    for(let i = 0; i < arr.length; i++){
                        tempArr1 = tempArr1.concat(arr[i].yyyy + "/" + arr[i].regday);
                        tempArr3[0].data = tempArr3[0].data.concat(arr[i].price.replace(/,/gi,""));
                    }
                    console.log(tempArr3);
                    setData({"labels":tempArr1, "datasets":tempArr3,});
                })
                .catch((err) => console.log(err));
        }
        // axios
        //     .get("http://localhost:8080/api/wholesale-and-retail/day/wholesale?start=2022-08-01&end=2022-09-30&kindGradeId=432",{ withCredentials: false })
        //     .then((res) => {
        //         arr = res.data.data.item.filter((i) => i.countyname == "평균");
        //         for(let i = 0; i < arr.length; i++){
        //             tempArr1 = tempArr1.concat(arr[i].yyyy + "/" + arr[i].regday);
        //             tempArr3[0].data = tempArr3[0].data.concat(arr[i].price.replace(/,/gi,""));
        //         }
        //         tempData = tempData.concat(tempArr3);
        //         console.log(tempData);
                
        //         setData({"labels":tempArr1, "datasets":tempData,});
        //     })
        //     .catch((err) => console.log(err));    
    }, [props]);


    
	return (
    	<div>
        	<Line type="line" data={data} options ={options} />
        </div>
    ); 
};
export default LineGraph;