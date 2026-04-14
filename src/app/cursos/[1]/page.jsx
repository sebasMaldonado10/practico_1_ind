import React from 'react'
import Link from 'next/link'

export default async function CursoDetalle ({params}) {

    const {id} = params;

    return (
        <div>
            <h1>Detalle del curso</h1>
            <p>Parametro del curso: {id}</p>
        </div>
    );
}