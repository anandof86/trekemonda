const converter = require('number-to-words');
const InvoiceGenerator = (props) => {
    const numtowords = converter.toWords(props.currentRow.total_value)
    console.log(props)
    const Party = props.party.filter(party => party.name == props.currentRow.party_name);
    const party = Party[0];
    return (
        <div>
            <p style={{ paddingTop: "3pt", textIndent: "0pt", textAlign: "right" }}>
                <a href="mailto:cnscements@gmail.com" className="a" target="_blank">
                    Mail id:{" "}
                </a>
                <a href="mailto:cnscements@gmail.com" target="_blank">
                    cnscements@gmail.com
                </a>
            </p>
            <table
                style={{ borderCollapse: "collapse", marginLeft: "5.765pt" }}
                cellSpacing={0}
            >
                <tbody>
                    <tr style={{ height: "21pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                            bgcolor="#C4D69B"
                        >
                            <p
                                className="s1"
                                style={{
                                    paddingLeft: "175pt",
                                    paddingRight: "173pt",
                                    textIndent: "0pt",
                                    textAlign: "center"
                                }}
                            >
                                CNS CEMENTS (P) LTD
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "55pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                        >
                            <p
                                className="s2"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    paddingRight: "124pt",
                                    textIndent: "0pt",
                                    lineHeight: "112%",
                                    textAlign: "left"
                                }}
                            >
                                Head Office :- "Lakshmi Nivas" 46 , S.V.V. Naidu Street, Pollachi ,
                                Tamilnadu - 642001
                            </p>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p
                                className="s3"
                                style={{
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    lineHeight: "8pt",
                                    textAlign: "left"
                                }}
                            >
                                Dispatch From
                            </p>
                            <p
                                className="s2"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    paddingRight: "83pt",
                                    textIndent: "0pt",
                                    lineHeight: "112%",
                                    textAlign: "left"
                                }}
                            >
                                Factory Address :- No.1022/2, Paranjervali Post,
                            </p>
                            <p
                                className="s2"
                                style={{ paddingLeft: "1pt", textIndent: "0pt", textAlign: "left" }}
                            >
                                Kangayam , Tamilnadu - 638 701.
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "24pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                            bgcolor="#D7E3BB"
                        >
                            <p
                                className="s4"
                                style={{
                                    paddingLeft: "175pt",
                                    paddingRight: "173pt",
                                    textIndent: "0pt",
                                    lineHeight: "22pt",
                                    textAlign: "center"
                                }}
                            >
                                Tax Invoice
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "16pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                        >
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                GST NO: {props.currentRow.party_gst}
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "18pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                        >
                            <p
                                className="s6"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                Bill No. {props.currentRow.bill_no}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p
                                className="s6"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                Date: {props.currentRow.bill_date}
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "21pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                        >
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                HSN CODE : {props.currentRow.hsn_code}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                VEHICLE NO : {props.currentRow.truck_no}
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "21pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                        >
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                PLACE OF SUPPLY : {props.currentRow.place_delivery}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                E Way Bill No : {props.currentRow.eway_bill_no}
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "123pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                        >
                            <p
                                className="s7"
                                style={{
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    lineHeight: "11pt",
                                    textAlign: "left"
                                }}
                            >
                                Bill To :
                            </p>
                            <p
                                className="s8"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                {party.address}
                            </p>

                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s10"
                                style={{
                                    paddingLeft: "1pt",
                                    paddingRight: "159pt",
                                    textIndent: "0pt",
                                    lineHeight: "127%",
                                    textAlign: "left"
                                }}
                            >
                                State Name :<span className="s9"> {party.state} </span>State Code :
                                <span className="s9"> {party.state_code}</span>
                            </p>
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                GST NO: {party.gst_no}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p
                                className="s7"
                                style={{
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    lineHeight: "11pt",
                                    textAlign: "left"
                                }}
                            >
                                Ship To :
                            </p>
                            <p
                                className="s8"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                {party.address}
                            </p>

                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s10"
                                style={{
                                    paddingLeft: "1pt",
                                    paddingRight: "154pt",
                                    textIndent: "0pt",
                                    lineHeight: "127%",
                                    textAlign: "left"
                                }}
                            >
                                State Name :<span className="s9"> {party.state} </span>State Code :
                                <span className="s9">{party.state_code}</span>
                            </p>
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                GST NO: {party.gst_no}
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "27pt" }}>
                        <td
                            style={{
                                width: "52pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            rowSpan={2}
                            bgcolor="#E6B8B7"
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "14pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                RATE
                            </p>
                        </td>
                        <td
                            style={{
                                width: "192pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            rowSpan={2}
                            bgcolor="#E6B8B7"
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "41pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                DESCRIPTION OF GOODS
                            </p>
                        </td>
                        <td
                            style={{
                                width: "60pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            rowSpan={2}
                            bgcolor="#E6B8B7"
                        >
                            <p
                                className="s6"
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "20pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                QTY
                            </p>
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "16pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                (Bags)
                            </p>
                        </td>
                        <td
                            style={{
                                width: "180pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={2}
                            bgcolor="#E6B8B7"
                        >
                            <p
                                className="s6"
                                style={{
                                    paddingTop: "6pt",
                                    paddingLeft: "67pt",
                                    paddingRight: "66pt",
                                    textIndent: "0pt",
                                    textAlign: "center"
                                }}
                            >
                                AMOUNT
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "12pt" }}>
                        <td
                            style={{
                                width: "89pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            bgcolor="#E6B8B7"
                        >
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "36pt",
                                    paddingRight: "34pt",
                                    textIndent: "0pt",
                                    lineHeight: "10pt",
                                    textAlign: "center"
                                }}
                            >
                                Rs.
                            </p>
                        </td>
                        <td
                            style={{
                                width: "91pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            bgcolor="#E6B8B7"
                        >
                            <p
                                className="s2"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "39pt",
                                    paddingRight: "37pt",
                                    textIndent: "0pt",
                                    lineHeight: "9pt",
                                    textAlign: "center"
                                }}
                            >
                                Ps.
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "111pt" }}>
                        <td
                            style={{
                                width: "52pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            rowSpan={2}
                        >
                            <p
                                className="s2"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "13pt",
                                    paddingRight: "11pt",
                                    textIndent: "7pt",
                                    lineHeight: "150%",
                                    textAlign: "left"
                                }}
                            >
                                Rs. {props.currentRow.rate}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "192pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            rowSpan={2}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "47pt",
                                    paddingRight: "5pt",
                                    textIndent: "11pt",
                                    lineHeight: "119%",
                                    textAlign: "left"
                                }}
                            >
                                PPC - PORTLAND POZZOLANA CEMENT
                            </p>
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            {props.currentRow.tax_per == 9 ?
                                <>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        CGST 9 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        SGST 9 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "93pt",
                                            paddingRight: "51pt",
                                            textIndent: "4pt",
                                            lineHeight: "135%",
                                            textAlign: "left"
                                        }}
                                    >
                                        IGST 18 % ROUND OFF
                                    </p>
                                </> : ''}
                            {props.currentRow.tax_per == 14 ?
                                <>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        CGST 14 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        SGST 14 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "93pt",
                                            paddingRight: "51pt",
                                            textIndent: "4pt",
                                            lineHeight: "135%",
                                            textAlign: "left"
                                        }}
                                    >
                                        IGST 28 % ROUND OFF
                                    </p>
                                </> : ''}
                            {props.currentRow.tax_per == 2.5 ?
                                <>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        CGST 2.5 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "96pt",
                                            textIndent: "0pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        SGST 2.5 %
                                    </p>
                                    <p
                                        className="s2"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "93pt",
                                            paddingRight: "51pt",
                                            textIndent: "4pt",
                                            lineHeight: "135%",
                                            textAlign: "left"
                                        }}
                                    >
                                        IGST 5 % ROUND OFF
                                    </p>
                                </> : ''}
                            <p
                                className="s11"
                                style={{
                                    paddingLeft: "123pt",
                                    textIndent: "0pt",
                                    lineHeight: "14pt",
                                    textAlign: "left"
                                }}
                            >
                                Total
                            </p>
                        </td>
                        <td
                            style={{
                                width: "60pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s6"
                                style={{
                                    paddingLeft: "20pt",
                                    paddingRight: "18pt",
                                    textIndent: "0pt",
                                    textAlign: "center"
                                }}
                            >
                                {props.currentRow.no_of_bags}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "89pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p className="s6" style={{ textIndent: "0pt", textAlign: "right" }}>
                                {props.currentRow.rate * props.currentRow.no_of_bags}
                            </p>
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p className="s6" style={{ textIndent: "0pt", textAlign: "right" }}>
                                {props.currentRow.tax_value}
                            </p>

                        </td>
                        <td
                            style={{
                                width: "91pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "15pt" }}>
                        <td
                            style={{
                                width: "60pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p
                                className="s8"
                                style={{
                                    paddingLeft: "20pt",
                                    paddingRight: "18pt",
                                    textIndent: "0pt",
                                    lineHeight: "13pt",
                                    textAlign: "center"
                                }}
                            >
                                {props.currentRow.no_of_bags}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "89pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p
                                className="s8"
                                style={{
                                    paddingLeft: "30pt",
                                    textIndent: "0pt",
                                    lineHeight: "13pt",
                                    textAlign: "left"
                                }}
                            >
                                {props.currentRow.total_value}
                            </p>
                        </td>
                        <td
                            style={{
                                width: "91pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "27pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                        >
                            <p
                                className="s12"
                                style={{
                                    paddingLeft: "11pt",
                                    textIndent: "0pt",
                                    lineHeight: "64%",
                                    textAlign: "left"
                                }}
                            >
                                Rupees - &nbsp;
                                <span className="s13">
                                    {numtowords} /-
                                </span>
                            </p>
                            <p
                                className="s2"
                                style={{
                                    paddingLeft: "53pt",
                                    textIndent: "0pt",
                                    lineHeight: "8pt",
                                    textAlign: "left"
                                }}
                            >
                                ……………………………………………………………………………………………………………………………………………
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "13pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "15pt" }}>
                        <td
                            style={{
                                width: "484pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={5}
                        >
                            <p
                                className="s7"
                                style={{
                                    paddingTop: "3pt",
                                    paddingLeft: "1pt",
                                    textIndent: "0pt",
                                    lineHeight: "10pt",
                                    textAlign: "left"
                                }}
                            >
                                Terms &amp; Conditions
                            </p>
                        </td>
                    </tr>
                    <tr style={{ height: "91pt" }}>
                        <td
                            style={{
                                width: "244pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "2pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt"
                            }}
                            colSpan={2}
                        >
                            <ol id="l1">
                                <li data-list-text={1}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Any changes in Tax will be on your accounts.
                                    </p>
                                </li>
                                <li data-list-text={2}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingTop: "5pt",
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Interest of 24 % @ will be charged on bills unpaid within due
                                        time.
                                    </p>
                                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                        <br />
                                    </p>
                                </li>
                                <li data-list-text={3}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Payments solicited by crossed cheuqe or crossed demands Draft.
                                    </p>
                                </li>
                                <li data-list-text={4}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingTop: "4pt",
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        No Claims will be recognised unless notified in writing within 8
                                        days from recipt
                                    </p>
                                </li>
                                <li data-list-text={5}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Only official receipts wil be recognised by the company.
                                    </p>
                                </li>
                                <li data-list-text={6}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingTop: "3pt",
                                            paddingLeft: "2pt",
                                            paddingRight: "32pt",
                                            textIndent: "-1pt",
                                            lineHeight: "110%",
                                            textAlign: "left"
                                        }}
                                    >
                                        Please test after drawing sample from these drums and if found
                                        suitable, then along make use of entire quantity, otherwise
                                        return to us within 8 days.
                                    </p>
                                </li>
                                <li data-list-text={7}>
                                    <p
                                        className="s14"
                                        style={{
                                            paddingTop: "2pt",
                                            paddingLeft: "7pt",
                                            textIndent: "-6pt",
                                            textAlign: "left"
                                        }}
                                    >
                                        Subject to Pollachi Jurisdiction
                                    </p>
                                </li>
                            </ol>
                        </td>
                        <td
                            style={{
                                width: "240pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "2pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "2pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "2pt"
                            }}
                            colSpan={3}
                        >
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s15"
                                style={{
                                    paddingLeft: "58pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                FOR <b>CNS CEMENTS (P) LTD,</b>
                            </p>
                            <p style={{ textIndent: "0pt", textAlign: "left" }}>
                                <br />
                            </p>
                            <p
                                className="s5"
                                style={{
                                    paddingTop: "9pt",
                                    paddingLeft: "74pt",
                                    textIndent: "0pt",
                                    textAlign: "left"
                                }}
                            >
                                Authorized Singnatory
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default InvoiceGenerator;