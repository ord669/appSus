const { useState, useEffect, Fragment } = React

export function DataTableRow({ todo, onRemoveTodo }) {
    return <Fragment>
        <tr>
            <td>{todo.txt}</td>
            {/* <td>{todo.doneAt}</td> */}
            <td><button className="clean-btn fa-solid x" onClick={() => onRemoveTodo(todo.id)}></button></td>

        </tr>
    </Fragment>





}