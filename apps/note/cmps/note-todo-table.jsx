const { useState, useEffect, Fragment } = React

export function DataTableRow({ todo, onRemoveTodo }) {
    console.log('todo11:', todo)

    return <Fragment>
        <tr>
            <td>{todo.txt}</td>
            {/* <td>{todo.doneAt}</td> */}
            <td><button onClick={() => onRemoveTodo(todo.id)}> X</button></td>

        </tr>
    </Fragment>





}