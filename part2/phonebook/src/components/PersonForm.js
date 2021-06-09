/**
 * Created by Clement Caylux on 06/06/2021
 */

import React from 'react'

export const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    name: <input onChange={props.nameChange}
                />
                </div>
                <div>
                    number: <input onChange={props.numberChange}/>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={props.addPerson}
                        on
                    >
                        add
                    </button>
                </div>
            </form>
        </div>
    )
}