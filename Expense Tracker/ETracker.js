import React from 'react'

const ETracker = ({track}) => {
  return (
    <div>
{
        (Object.keys(track).length>0) ?
        <div className='container mt-5 '>
    <div className='row'>
    <div className='col col-md-6'>
        <table className='table table-hover text-center'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Total Amount</th>
                    <th>Add Amount</th>
                    <th>Remove Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {
                    track.map((elem,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{elem.tDate}</td>
                                <td>{elem.ttotal}</td>
                                <td>{elem.taddamount}</td>
                                <td>{elem.tremoveamount}</td>
                                <td>{elem.tbalanceamount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
        </div>:null
}
    </div>
  )
}

export default ETracker