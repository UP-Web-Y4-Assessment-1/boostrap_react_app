import React from 'react'

function Order() {
    return (
        <>
       
        <div className='p-5 bg-light '>
            <div className='bg-white rounded  p-4'>
                <table className='table caption-top '>
                    {/* <caption className='text-black fs-4'>Recent Orders</caption> */}
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>First</th>
                            <th scope='col'>Last</th>
                            <th scope='col'>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Iphone</td>
                        </tr>
                        <tr>
                            <th scope='row'>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <th scope='row'>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>Watch</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
      )
}

export default Order