import React from 'react';

type NewComponentType = {
    //students: Array<StudentType>,
    students: StudentType[],
    topCars: CarsType[],
}
type StudentType = {
    id: number,
    name: string,
    age: number,
}
type CarsType = {
    manufacturer: string,
    model: string,
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((o, index) => {
                    return (
                        <li key={o.id}>{o.name}<span>{o.age}</span></li>
                    )
                })}
            </ul>
            <table>
                {props.topCars.map((ob, index) => {
                    return (
                        <tr key={index}>
                            <th>{ob.manufacturer}</th>
                            <th>{ob.model}</th>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};