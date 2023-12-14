import React from 'react'
function User() {
    return (
    <>
    
    <div className='p-5 bg-light '>
        <div className='bg-white rounded  p-4'>
            <table className='table caption-top '>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>0987476345</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>0887987456</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>0985787465</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default User