import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
const PdfUsingReactrenderer = () => {
    const studentData = [
        { name: "John", age: "21" },
        { name: "Smith", age: "22" },
        { name: "Don", age: "24" },
    ];
    const studentData2 = [
        { name: "Donn", age: "21" },
        { name: "Smithh", age: "22" },
        { name: "Don2", age: "24" },
    ];
    // ================= PDF STYLES =================
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: '#ffffff',
            fontFamily: 'Helvetica',
        },
        titleContainer: {
            backgroundColor: '#307244',
            padding: 12,
            marginBottom: 20,
            borderRadius: 5,
        },
        title: {
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        subtitle: {
            color: '#eeeeee',
            fontSize: 10,
            textAlign: 'center',
            marginTop: 5,
        },
        reportTitle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: 8,
            marginTop: 8,
        },
        table: {
            width: '100%',
            borderWidth: 1,
            borderColor: '#bcdfc7',
            marginBottom: 20,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableHeader: {
            backgroundColor: '#bcdfc7',
        },
        headerText: {
            fontWeight: 'bold',
            color: '#333333',
        },
        sno: {
            width: '20%',
        },
        name: {
            width: '50%',
        },
        age: {
            width: '30%',
        },
        cell: {
            padding: 8,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#cccccc',
            fontSize: 11,
        },
        lastCell: {
            borderRightWidth: 0,
        },
        lastRowCell: {
            borderBottomWidth: 0,
        },
        headContainer: {
            marginTop: 5,
            padding: 12,
            backgroundColor: '#f8f9fa',
            borderWidth: 1,
            borderColor: '#dddddd',
            borderRadius: 5,
        },
        headRow: {
            flexDirection: 'row',
            marginBottom: 8,
        },
        headLabel: {
            width: '35%',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#555555',
        },
        headValue: {
            width: '65%',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#bcdfc7',
        },
        footer: {
            position: 'absolute',
            bottom: 15,
            left: 30,
            right: 30,
            textAlign: 'center',
            fontSize: 9,
            color: '#888888',
        }
    });
    // ================= PDF TABLE =================
    const StudentTable = ({ data }) => {
        return (
            <View style={styles.table}>
                {/* Header */}
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.cell, styles.sno, styles.headerText]} > S.No. </Text>
                    <Text style={[styles.cell, styles.name, styles.headerText]} > Name </Text>
                    <Text style={[styles.cell, styles.age, styles.headerText, styles.lastCell]} > Age </Text>
                </View>
                {/* Body */}
                {data.map((student, index) => {
                    const isLastRow = index === data.length - 1;
                    return (
                        <View style={styles.tableRow} key={index} >
                            <Text style={[styles.cell, styles.sno, isLastRow && styles.lastRowCell]} > {index + 1} </Text>
                            <Text style={[styles.cell, styles.name, isLastRow && styles.lastRowCell]} > {student.name} </Text>
                            <Text style={[styles.cell, styles.age, styles.lastCell, isLastRow && styles.lastRowCell]} > {student.age} </Text>
                        </View>
                    );
                })}
            </View>
        );
    };
    // ================= PDF DOCUMENT =================
    const StudentPdf = () => (
        <Document>
            <Page size="A4" style={styles.page} >
                {/* TITLE */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Student Details Report </Text>
                    <Text style={styles.subtitle}> Student Information Summary </Text>
                </View>

                {/* REPORT 1 */}
                <Text style={styles.reportTitle}> Student Details Report 1 </Text>
                {studentData.length > 0 ? (<StudentTable data={studentData} />) : (<Text>*** No Data Found ***</Text>)}

                {/* REPORT 2 */}
                <Text style={styles.reportTitle}> Student Details Report 2 </Text>
                {studentData2.length > 0 ? (<StudentTable data={studentData2} />) : (<Text>*** No Data Found ***</Text>)}

                {/* HEAD DETAILS */}
                <View style={styles.headContainer}>
                    <View style={styles.headRow}>
                        <Text style={styles.headLabel}> Report 1 Head: </Text>
                        <Text style={styles.headValue}> {studentData[0]?.name} </Text>=
                    </View>
                    <View style={styles.headRow}>
                        <Text style={styles.headLabel}> Report 2 Head: </Text>
                        <Text style={styles.headValue}> {studentData2[0]?.name} </Text>
                    </View>
                </View>

                {/* FOOTER */}
                <Text style={styles.footer}> Student Details Report </Text>
            </Page>
        </Document>
    );

    // ================= VIEW + DOWNLOAD =================
    const handleViewPdf = async () => {
        const blob = await pdf(<StudentPdf />).toBlob();
        const url = URL.createObjectURL(blob);
        // Open PDF in new tab
        window.open(url, '_blank');
        // Download PDF
        const link = document.createElement('a');
        link.href = url;
        link.download = 'student-details.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container mt-3">
            <h4 className="mb-3"> Student Details </h4>
            <h5> Student Details Report 1 </h5>
            {studentData.length > 0 ? (
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((stud, index) => (
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {stud.name} </td>
                                <td> {stud.age} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <center className="text-danger"> *** No Data Found *** </center>
            )}

            <h5 className="mt-4"> Student Details Report 2 </h5>
            {studentData2.length > 0 ? (
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData2.map((stud, index) => (
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {stud.name} </td>
                                <td> {stud.age} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <center className="text-danger"> *** No Data Found *** </center>
            )}

            <div className="mt-3">
                <label> Report 1 Head: </label>
                <b className="ms-2"> {studentData[0]?.name} </b> <br />
                <label> Report 2 Head: </label>
                <b className="ms-2"> {studentData2[0]?.name} </b>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button
                    type="button"
                    className="btn btn-success rounded"
                    onClick={handleViewPdf}
                    disabled={
                        studentData.length === 0 &&
                        studentData2.length === 0
                    }
                >
                    View PDF
                </button>
            </div>
        </div>
    );
};
export default PdfUsingReactrenderer;