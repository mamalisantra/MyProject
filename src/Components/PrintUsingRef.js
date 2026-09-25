import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const PrintUsingRef = () => {
    const tableRef = useRef();
    const headingRef=useRef();

    const handleTablePrint = useReactToPrint({
        contentRef:tableRef,
        documentTitle:"Table Details",
    });

    const handleHeadingprint=useReactToPrint({
        contentRef:headingRef,
        documentTitle:"Heading Details",
    })
  
    return (
        <div>
            <div ref={headingRef} style={{height:"10%"}} >
                <h2>Table Heading</h2>
            </div>
            <button className='btn btn-primary' onClick={handleHeadingprint}>Print Heading</button>
            <div ref={tableRef} style={{height:"10%"}} >
                <table className='table table bordered table-striped'>
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Suni</td>
                            <td>Female</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='btn btn-primary' onClick={handleTablePrint}>Print Table</button>
        </div>
    )
}

export default PrintUsingRef