import React, {useEffect, useState, Component} from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import 'bootstrap/dist/css/bootstrap.min.css';


class dashBoardBI extends Component {
    
     render(){
     return (
        /*<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: '<Report Id>',
		embedUrl: '<Embed Url>',
		accessToken: '<Access Token>',
		tokenType: models.TokenType.Embed,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "report-style-class" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport;
	}}
/>*/
<iframe title="PB-mascotas" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=9b09def3-a4e4-43f6-b9ed-622fa579955f&autoAuth=true&ctid=c4a8886b-f140-478b-ac47-249555c30afd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
     )
}
}

export default dashBoardBI;