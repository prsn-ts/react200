import React, { Component } from 'react';

class R015_Map extends Component {
    componentDidMount() {
        //기존 Map_Arr 배열을 통해 새로운 배열(Map_newArr)을 반환
        var Map_Arr = [3, 2, 8, 8];
        let Map_newArr = Map_Arr.map(x => x);
        console.log("1. Map_newArr : ["+Map_newArr+"]"); // 1. Map_newArr : [3,2,8,8]

        // 기존 Map_Arr 배열에서 각 요소에 순차적으로 접근해 x2 배수를 적용한 새로운 배열(Map_mulitiArr)을 반환
        let Map_mulitiArr = Map_Arr.map(x => x * 2);
        console.log("1. Map_mulitiArr : ["+Map_mulitiArr+"]"); // 1. Map_mulitiArr : [6,4,16,16]

        // 기존 ObjArray 배열에 있는 요소(obj)와 순번(index)을 Obj 객체에 키와 값을 저장 후 새로운 객체가 반환된 ObjArray
        var ObjArray = [{key:'react', value:'200'},
                        {key:'리액트', value:'TwoHundred'}];
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index+3)+". obj : "+JSON.stringify(obj)) 
            // 3. obj : {"key":"react","value":"200"} 
            // 4. obj : {"key":"리액트","value":"TwoHundred"}
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr)); // 5. Map_objArr : [{"react":"200"},{"리액트":"TwoHundred"}]
    }

    render() {
        return (
            <h2>[THIS IS Map]</h2>
        )
    }
}

export default R015_Map;
