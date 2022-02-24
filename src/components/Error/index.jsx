import React from "react"

export const Error = () => {
    return (
        <div className="container row-cols bg-danger text-light mt-3 p-2">This is an info callout. Example text to show it in action.
            <div className="btn-group ps-4">
                <button type="button" className="btn btn-sm btn-outline-secondary bg-light">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary bg-light">Cancel</button>
            </div>
        </div>
    )
}