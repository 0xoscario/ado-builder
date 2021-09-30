import React from 'react'

const TransactionsPage = (props) => {
    return (
        <div id='transactionsWrapper'>
            <p className='h3'>Transactions Page</p>
            <button
                className='btn btn-primary p-2'
                onClick={() => {
                    props.setShowDash(true)
                }}
            >
                Close Page
            </button>
        </div>
    )
}

export default TransactionsPage
