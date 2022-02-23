
const fetch = require("node-fetch");

const a = `<html>
<style>
    @media print {
        body {
            width: 21cm;
            height: 29.7cm;
            margin: 0;
            /* top right bottom left */
        }
    }

    table,
    th,
    tr,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    table {
        width: 100%;
    }

    .no-borer {
        border: 0px solid black;
        border-collapse: separate;
    }

    .key {
        color: #1681BE;
        font-weight: bold;
        font-size: 20px;
        padding-left: 8px;
        text-align: left;
    }

    .value {
        font-size: 20px;
        padding-left: 8px;
        text-align: left;
    }

    .width100 {
        width: 100%;
    }

    .width75 {
        width: 75%;
    }

    .width50 {
        width: 50%;
    }

    .width20 {
        width: 20%;
    }

    .width15 {
        width: 15%;
    }

    .width10 {
        width: 10%;
    }
</style>

<head>
    <title>Full Inspection Report</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head><body style="padding: 24px; font-family: sans-serif;"> 
<table style="border: 0px solid black;">
<tr style=" border: 0px solid black;">
    <td style=" border: 0px solid black;"><img src="https://propview.ap-south-1.linodeobjects.com/logov2.jpeg"
            alt="" height="80"></td>
    <td style="text-align: right; border: 0px solid black;">
        <p style="
        color: #1681BE; font-weight: bold;">#204, 2nd floor, Vipul Trade Centre, Sector 48, <br>
            Sohna Road, Gurugram - 122 018, Haryana<br>
            Phone: +91 95821 95821<br>
            <a href="https://www.propdial.com" targer="_blank" style="
            color: #1681BE;">www.propdial.com</a>
        </p>
    </td>
</tr>
</table>
<br>`
var innerhtml;
exports.func = async function (inspection_id) {
    const response = await fetch('https://api.propdial.co.in/api/inspection/get/' + inspection_id);
    var inspectionModel = await response.json();
    var inspection = inspectionModel.data.inspection[0];
    // print inspection
    const employee_id = inspection.employee_id;
    const property_id = inspection.property_id;
    var d = new Date(inspection.createdAt);
    d = d.toLocaleDateString('en-uk', { year: "numeric", month: "short", day: "numeric" });

    const response2 = await fetch('https://api.propdial.co.in/api/user/' + employee_id);
    const employee = await response2.json();
    const response3 = await fetch('https://api.propdial.co.in/api/property/' + property_id);
    const propertyModel = await response3.json();
    property = propertyModel.data.property[0];
    const tenant_id = property.tableproperty.tenant_id;
    const owner_id = property.tableproperty.owner_id;
    const response4 = await fetch('https://api.propdial.co.in/api/propertyowner/' + owner_id);
    const ownerModel = await response4.json();
    owner = ownerModel.data.propertyOwner[0];
    var tenant_Data;
    var tenant_Data_Style;
    if (tenant_id != "") {
        var tenant_id_list = tenant_id.split(",");
        tenant_Data_Style = "";
        var tenant_name_list = [];
        for (i = 0; i < tenant_id_list.length; i++) {
            const response5 = await fetch('https://api.propdial.co.in/api/tenant/' + tenant_id_list[i]);
            const tenantModel = await response5.json();
            tenant = tenantModel[0];
            tenant_name_list.push(tenant.name);
        }
        tenant_Data = `<td class="key">  Tenant Name: </td>
    <td class="value width75 ">
        ${tenant_name_list.join(", ")}
    </td>`;
    } else {
        tenant_Data_Style = "display:none;";
        tenant_Data = "";
    }
    var bill_Data;
    var bill_Data_Style;
    const response6 = await fetch('https://api.propdial.co.in/api/bill/property/' + property_id);
    const response7 = await fetch('https://api.propdial.co.in/api/bill/types');
    const billlist = await response7.json();
    const billModel = await response6.json();
    if (billModel.length > 0) {
        bill_Data_Style = "";
        bill_Data = `<tr>
            <th class="key ">
                Bill Type
            </th>
            <th class="key ">
                Authority
            </th>
            <th class="key ">
                Bill ID
            </th>
            <th class="key ">
                Amount Due
            </th>
            <th class="key ">
                Last updated
            </th>
        </tr>`;
        for (i = 0; i < billModel.length; i++) {
            var d = new Date(billModel[i].last_update);
            d = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            var billType = billlist.find(x => x.bill_type_id === billModel[i].bill_type_id);
            bill_Data += `<tr>
            <td class="value width20">
                ${billType.bill_name}
            </td>
            <td class="value width20">
                ${billModel[i].authority_name}
            </td>
            <td class="value width20">
                ${billModel[i].bill_id}
            </td>
            <td class="value width20">
                Rs ${billModel[i].amount}
            </td>
            <td class="value width20">
                ${d.toLocaleString()}
            </td>
        </tr>`
        }
    } else {
        bill_Data_Style = "display:none;";
        bill_Data = "";
    }
    var roomwise_Data;
    var roomwise_Data_Style;
    var issueTableIdlist = inspection.issue_id_list.split(",");
    if (issueTableIdlist.length > 0) {
        roomwise_Data = "";
        roomwise_Data_Style = "";
        for (i = 0; i < issueTableIdlist.length; i++) {
            const response8 = await fetch('https://api.propdial.co.in/api/issue/table/get/' + issueTableIdlist[i]);
            const issueTableModel = await response8.json();
            issuetable = issueTableModel.data[0];
            htmltablestring = `<br><h3 style="color: red;">${issuetable.roomsubroom_name}</h3>`;
            var issueIdlist = issuetable.issue_row_id.split(",");
            if (issueIdlist.length > 0) {
                htmltablestring += `<table> <tr>
                <th class="key width10">Sr No</th>
                <th class="key width20">Particular</th>
                <th class="key width10">Status</th>
                <th class="key">Remarks</th>
                <th class="key width15">Photos</th>
            </tr>`;
                for (j = 0; j < issueIdlist.length; j++) {
                    const response9 = await fetch('https://api.propdial.co.in/api/issue/get/' + issueIdlist[j]);
                    const issueModel = await response9.json();
                    issue = issueModel.data[0];
                    htmltablestring += `<tr>
                <td class="value">
                    ${j + 1}
                </td>
                <td class="value">
                    ${issue.issue_name}
                </td>
                <td class="value">
                    ${issue.status}
                </td>
                <td class="value">
                    ${issue.remarks}
                </td> 
                <td class="value">`;
                    if (issue.photo != "") {
                        var photolist = issue.photo.split(",");
                        for (k = 0; k < photolist.length; k++) {
                            htmltablestring += `<a href="https://propview.ap-south-1.linodeobjects.com/Inspection/${photolist[k]}"><img src="https://propview.ap-south-1.linodeobjects.com/Inspection/${photolist[k]}" width="90" height="120"></a> <br><br>`;
                        }
                    }
                    htmltablestring += `
                </td>
            </tr>`;
                }
                htmltablestring += `</table>`;
            }
            roomwise_Data += htmltablestring;
        }
    }else{
        roomwise_Data_Style = "display:none;";
        roomwise_Data = "";
    }

    innerhtml = `<h1 style="color: red; text-align: center;">${inspection.inspect_type + " Report"}
    </h1>
    <br>
    <br>
    <br>
    <table>
        <tr>
            <td class="key ">
                Site Visit Date:
            </td> <td class="value width75">${d}</td>
    </tr>
</table>
<br>
<br>
<table>
    <tr>
        <td class="key ">
            Property Owner:
        </td>
        <td class="value width75" >${owner.owner_name}</td>
        </tr>
        <tr style=${tenant_Data_Style} id="tenantName">
        ${tenant_Data}
        </tr>
        <tr>
            <td class="key ">
                Property Address:
            </td>
            <td class="value width75 ">
            ${property.tableproperty.unit_no + ", " + property.tbl_locality.locname + ", " + property.tbl_society.socname + ", " + property.tbl_city.ccname + ", " + property.tbl_state.sname + ", " + property.tbl_country.cname}
            </td>
        </tr>
        <tr>
            <td class="key ">
                BHK:
            </td>
            <td class="value width75 ">
            ${property.tableproperty.bhk}
            </td>
        </tr>
        <tr>
            <td class="key">
                Executive Name:
            </td>
            <td class="value width75">
            ${employee.name}
            </td>
        </tr>
    </table>
    <br> 
    <h3 style="${bill_Data === "" ? "display: none;" : "color: red;"}">Bill Payment Dues</h3>
    <table style=${bill_Data_Style} id="billTable">
    ${bill_Data}
    </table>
    <br>
    <h2 id="headingroomwise" style="${roomwise_Data_Style === "" ? "text-align: center;" : "text-align: center; display: none;"}">Room Wise Inspection</h2>
    <div id="roomwise" style="${roomwise_Data_Style}">
    ${roomwise_Data}
    </div>
    `;

    const b = `</body></html>`;
    let data = a + innerhtml + b;
    return data;
}
