import React from 'react'

const ListItem = ({ children, ident }) => {
    return (
        <li className={ident ? 'ident' : undefined}>{children}</li>
    )
}

export default ListItem