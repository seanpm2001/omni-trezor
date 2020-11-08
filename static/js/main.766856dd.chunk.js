(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(90)},55:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(49),o=a.n(s),c=(a(55),a(2)),l=a.n(c),i=a(10),u=a(3),p=a(4),d=a(6),m=a(5),h=a(7),f=a(17),E=a.n(f),b=a(8),g=a(9),v=(a(89),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleNavClick=function(e){e.target.classList.contains("active")&&!e.target.classList.contains("current")&&a.props.setStep(e.target.getAttribute("data-step"))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"transaction-breadcrumbs","aria-label":"breadcrumbs"},r.a.createElement("ul",null,r.a.createElement("li",{"data-step":0,className:"".concat(this.props.currentStep>=0?"active":""," ").concat(0===this.props.currentStep?"current":""),onClick:this.handleNavClick},"Connect Trezor"),r.a.createElement("span",{className:"".concat(this.props.currentStep>=1?"active":"")},"\u2192"),r.a.createElement("li",{"data-step":1,className:"".concat(this.props.currentStep>=1?"active":""," ").concat(1===this.props.currentStep?"current":""),onClick:this.handleNavClick},"Select Address"),r.a.createElement("span",{className:"".concat(this.props.currentStep>=2?"active":"")},"\u2192"),r.a.createElement("li",{"data-step":2,className:"".concat(this.props.currentStep>=2?"active":""," ").concat(2===this.props.currentStep?"current":""),onClick:this.handleNavClick},"Specify Details"),r.a.createElement("span",{className:"".concat(this.props.currentStep>=3?"active":"")},"\u2192"),r.a.createElement("li",{"data-step":3,className:"".concat(this.props.currentStep>=3?"active":""," ").concat(3===this.props.currentStep?"current":""),onClick:this.handleNavClick},"Sign & Send"),r.a.createElement("span",{className:"".concat(this.props.currentStep>=4?"active":"")},"\u2192"),r.a.createElement("li",{"data-step":4,className:"".concat(this.props.currentStep>=4?"active":""," ").concat(4===this.props.currentStep?"current":""),onClick:this.handleNavClick},"Complete")))}}]),t}(r.a.Component)),S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).discoverAccounts=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.setLoading(!0),e.next=3,E.a.getAccountInfo({coin:"btc",details:"tokens"});case 3:t=e.sent,a.props.setLoading(!1),a.props.parentCallback(t);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"connect-trezor"},r.a.createElement("h3",null,r.a.createElement(b.a,{icon:g.e,className:"is-hidden"})," Please Read Before Continuing ",r.a.createElement(b.a,{icon:g.e,className:"is-hidden"})),r.a.createElement("div",{className:"preflight-checklist-container"},r.a.createElement("div",{className:"checklist"},r.a.createElement("p",null,"Have you..."),r.a.createElement("ul",null,r.a.createElement("li",null,"Checked that the URL bar says https://trezor.github.io/omni-trezor ?"),r.a.createElement("li",null,"Verified your recipient address?"),r.a.createElement("li",null,"Confirmed you have at least one output in your sending address greater than or equal to 0.00008 BTC?"),r.a.createElement("li",null,"Audited this tool's ",r.a.createElement("a",{href:"https://github.com/trezor/omni-trezor",target:"_blank",rel:"noopener noreferrer"},"source code on GitHub?")),r.a.createElement("li",null,"Read the ",r.a.createElement("a",{href:"https://github.com/trezor/omni-trezor/blob/master/TERMS.md",target:"_blank",rel:"noopener noreferrer"},"Terms of Use?"))))),r.a.createElement("p",null,"If so, this tool allows you to send OMNI transactions using your Trezor's Bitcoin addresses.  Click the button below to continue."),r.a.createElement("button",{id:"discoverAccounts",onClick:this.discoverAccounts,className:"button"},"Connect to Trezor"),r.a.createElement("small",null,"By continuing you agree to the ",r.a.createElement("a",{href:"https://github.com/trezor/omni-trezor/blob/master/TERMS.md",target:"_blank",rel:"noopener noreferrer"},"Terms of Use.")))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).selectAddress=function(e){var t=a.props.addresses[parseInt(e.target.getAttribute("data-address-index"))];a.props.parentCallback(t)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"addressDetailContainer"},0===this.props.addresses.length&&r.a.createElement("p",null,"There are no eligible addresses on this account.  Please ensure your addresses containing OMNI tokens have at least 8000 satoshi in Bitcoin on a single output as well in order to faciliate a transaction."),this.props.addresses.map(function(t,a){return r.a.createElement("article",{className:"addressDetails","data-address":t.address,key:a},r.a.createElement("header",null,r.a.createElement("h4",null,t.address),r.a.createElement("button",{onClick:e.selectAddress,"data-address-index":a,className:"button"},"Select Address")),r.a.createElement("table",null,r.a.createElement("tbody",null,t.omniDetails.balance.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"coin-name"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:e.propertyinfo.url},e.propertyinfo.name),r.a.createElement("small",null,"ID: ",e.propertyinfo.propertyid)),r.a.createElement("td",null,e.divisible?1e-8*parseInt(e.value):parseInt(e.value)))}))))}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){switch(e.target.getAttribute("name")){case"asset":a.setState({assetIndex:e.target.value});break;case"amount":a.setState({amount:e.target.value});break;case"recipient":a.setState({recipient:e.target.value})}},a.handleSubmit=function(e){e.preventDefault(),a.props.parentCallback(a.state)},a.state={assetIndex:0,amount:"",recipient:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"transaction-details-form-container"},r.a.createElement("header",null,r.a.createElement("h2",null,"Specify Transaction Details")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Transaction Type"),r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{value:"simplesend",readOnly:!0},r.a.createElement("option",{value:"simplesend"},"Simple Send")))),r.a.createElement("div",{className:"txAssetAmountContaier"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Asset"),r.a.createElement("div",{className:"select"},r.a.createElement("select",{value:this.state.assetIndex,onChange:this.handleChange,name:"asset"},this.props.address.omniDetails.balance.filter(function(e){return"0"!==e.id}).map(function(e,t){return r.a.createElement("option",{value:t,key:e.id},e.propertyinfo.name," (ID: ",e.id,")")})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{type:"number",value:this.state.amount,onChange:this.handleChange,name:"amount",className:"input"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Receiving Address"),r.a.createElement("input",{type:"text",value:this.state.recipient,onChange:this.handleChange,name:"recipient",className:"input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"button is-fullwidth",onClick:this.handleSubmit},"Submit"))))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).toggleOpreturnDetails=function(){a.setState(function(e,t){return{opreturnVisible:!e.opreturnVisible}})},a.signSend=function(){a.props.setLoadingAlt(!0),a.props.parentCallback()},a.state={opreturnVisible:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"confirm-transaction-container"},r.a.createElement("header",null,r.a.createElement("h2",null,"Confirm Transaction")),r.a.createElement("section",{className:"sending-from"},r.a.createElement("p",null,r.a.createElement("b",null,"Simple Send")," Operation of ",r.a.createElement("b",null,this.props.transactionElements.amount," ",this.props.transactionElements.asset.propertyinfo.name)," From"),r.a.createElement("address",null,this.props.sendAddress.address)),r.a.createElement("p",{className:"opreturn-details-toggle",onClick:this.toggleOpreturnDetails},this.state.opreturnVisible?r.a.createElement(b.a,{icon:g.c}):r.a.createElement(b.a,{icon:g.b}),this.state.opreturnVisible?" Hide OP_RETURN Details":" Show OP_RETURN Details"),r.a.createElement("section",{className:"opreturn-details ".concat(this.state.opreturnVisible?"":"is-hidden")},r.a.createElement("small",null,"OP_RETURN data for the OMNI transaction.  This may be shown on your Trezor depending on firmware version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"omni-prefix omni-segment"},this.props.transactionIO.opreturnDataSegments[0]),r.a.createElement("td",{className:"omni-version omni-segment"},this.props.transactionIO.opreturnDataSegments[1]),r.a.createElement("td",{className:"omni-asset-id omni-segment"},this.props.transactionIO.opreturnDataSegments[2]),r.a.createElement("td",{className:"omni-amount omni-segment"},this.props.transactionIO.opreturnDataSegments[3])),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("small",null,"Prefix")),r.a.createElement("td",null,r.a.createElement("small",null,"Version")),r.a.createElement("td",null,r.a.createElement("small",null,"Asset ID")),r.a.createElement("td",null,r.a.createElement("small",null,"Amount"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,this._hexToString(this.props.transactionIO.opreturnDataSegments[0]))),r.a.createElement("td",null,r.a.createElement("code",null,parseInt(this.props.transactionIO.opreturnDataSegments[1],16))),r.a.createElement("td",null,r.a.createElement("code",null,parseInt(this.props.transactionIO.opreturnDataSegments[2],16))),r.a.createElement("td",null,r.a.createElement("code",null,this.props.transactionElements.asset.divisible?1e-8*parseInt(this.props.transactionIO.opreturnDataSegments[3],16):parseInt(this.props.transactionIO.opreturnDataSegments[3],16)),this.props.transactionElements.asset.divisible?r.a.createElement("small",null,"(Divisible)"):r.a.createElement("small",null,"(Not Divisible)")))))),r.a.createElement("section",{className:"recipient"},r.a.createElement("small",null,"Recipient Address"),r.a.createElement("address",null,this.props.transactionElements.recipient)),r.a.createElement("section",{className:"estimated-fee"},r.a.createElement("small",null,"Estimated Fee: ",1e-8*this.props.transactionIO.estimatedFee," BTC"),r.a.createElement("small",null,"Note: Also sending 0.000006 BTC to recipient to faciliate OMNI transaction.")),r.a.createElement("button",{className:"button is-fullwidth ".concat(this.props.loadingAlt?"disabled":""),onClick:this.signSend,disabled:this.props.loadingAlt},this.props.loadingAlt?r.a.createElement(b.a,{icon:g.d,spin:!0}):"Sign & Send"))}},{key:"_hexToString",value:function(e){for(var t="",a=0;a<e.length;a+=2)t+=String.fromCharCode(parseInt(e.substr(a,2),16));return t}}]),t}(r.a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"complete-container"},r.a.createElement("h2",null,"Transaction Complete ",r.a.createElement(b.a,{icon:g.a})),r.a.createElement("div",{className:"transaction-hash"},r.a.createElement("p",null,"Transaction Hash"),r.a.createElement("address",null,this.props.transactionResults.payload.txid)),r.a.createElement("div",{className:"view-on-explorers"},r.a.createElement("a",{href:"https://omniexplorer.info/tx/".concat(this.props.transactionResults.payload.txid),target:"_blank",rel:"noopener noreferrer nofollow",className:"button"},"View on Omni Explorer"),r.a.createElement("a",{href:"https://btc1.trezor.io/tx/".concat(this.props.transactionResults.payload.txid),target:"_blank",rel:"noopener noreferrer nofollow",className:"button"},"View on Trezor Blockbook")))}}]),t}(r.a.Component),x=function(e){var t=e.toLowerCase().split("/");if("m"!==t[0])throw"Not a valid path";return t.filter(function(e){return"m"!==e&&""!==e}).map(function(e){var t=!1;"'"===e.substr(e.length-1)&&(t=!0,e=e.substr(0,e.length-1));var a=parseInt(e);if(isNaN(a))throw"Not a valid path";if(a<0)throw"Path cannot contain negative values";return t&&(a=function(e){return(2147483648|e)>>>0}(a)),a})},A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).setLoading=function(e){a.setState({loadingAlt:!1}),a.setState({loading:e})},a.setLoadingAlt=function(e){a.setState({loadingAlt:e})},a.setStep=function(e){a.setState({currentStep:e})},a.handleDiscoverAccounts=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,s,o,c,i,u,p,d,m,h,f,E,b,g,v,S;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Exported account details:\n",t),!0!==t.success){e.next=58;break}a.setLoading(!0),a.setState({accountInfo:t.payload}),n=t.payload.utxo,r=n.filter(function(e){return parseInt(e.amount)>=8e3}),s=r.sort(function(e){return parseInt(e.amount)}),o=r.map(function(e){return e.path}).filter(function(e,t,a){return a.indexOf(e)===t}),c=o.map(function(e){var t=s.find(function(t){return t.path===e});return{addressPath:e,outTxHash:t.txid,outTxIndex:t.vout,outTxValue:parseInt(t.amount)}}),i={},u=!0,p=!1,d=void 0,e.prev=13,m=c[Symbol.iterator]();case 15:if(u=(h=m.next()).done){e.next=27;break}return f=h.value,e.next=19,fetch("https://blockstream.info/api/tx/".concat(f.outTxHash));case 19:return E=e.sent,e.next=22,E.json();case 22:b=e.sent,i[f.outTxHash]=b;case 24:u=!0,e.next=15;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e.catch(13),p=!0,d=e.t0;case 33:e.prev=33,e.prev=34,u||null==m.return||m.return();case 36:if(e.prev=36,!p){e.next=39;break}throw d;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return c=c.map(function(e){return e.address=i[e.outTxHash].vout[e.outTxIndex].scriptpubkey_address,e}),console.log("Detected eligible addresses:\n",c),e.next=45,fetch("https://api.omniwallet.org/v2/address/addr/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.map(function(e){return"addr=".concat(e.address)}).join("&")});case 45:return g=e.sent,e.next=48,g.json();case 48:v=e.sent,console.log("Eligible address OMNI details:\n",v),S=(S=c.map(function(e){return e.omniDetails=v[e.address],e})).filter(function(e){return e.omniDetails.balance.length>1}),a.setState({accountAddresses:S}),console.log("Final parsed address details:\n",S),a.setStep(1),a.setLoading(!1),e.next=59;break;case 58:a.setLoading(!1);case 59:case"end":return e.stop()}},e,null,[[13,29,33,41],[34,,36,40]])}));return function(t){return e.apply(this,arguments)}}(),a.handleSelectAddress=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setLoading(!0),a.setState({sendAddress:t}),a.setStep(2),a.setLoading(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSpecifyDetails=function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setLoading(!0),n={asset:a.state.sendAddress.omniDetails.balance[t.assetIndex],amount:t.amount,recipient:t.recipient},console.log("Received the following transaction details from form:\n",n),a.setState({transactionElements:{asset:n.asset,amount:n.amount,recipient:n.recipient}},Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._generateTransaction();case 2:t=e.sent,a.setState({transactionIO:t}),a.setStep(3),a.setLoading(!1);case 6:case"end":return e.stop()}},e)})));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmTransaction=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setLoadingAlt(!0),e.next=3,a._signSendTransaction();case 3:t=e.sent,a.setState({transactionResults:t},function(){console.log("Transaction results:\n",t),a.setLoadingAlt(!1),!0===t.success?a.setStep(4):alert("There was an issue completing the transaction.\nSee the console for details."),a.setLoading(!1)});case 5:case"end":return e.stop()}},e)})),a._generateTransaction=Object(i.a)(l.a.mark(function e(){var t,n,r,s,o,c,i,u,p;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"6f6d6e69","0000",t=parseInt(a.state.transactionElements.asset.id).toString(16).padStart(12,0),n=a.state.transactionElements.amount,!0===a.state.transactionElements.asset.divisible&&(n*=1e8),n=parseFloat(n).toString(16).padStart(16,0),s=(r=["6f6d6e69","0000",t,n]).join(""),(i=a.state.sendAddress.outTxValue>=12600)?(c=a.state.sendAddress.outTxValue-12e3,o=11400):o=a.state.sendAddress.outTxValue-600,u=[{address_n:x(a.state.sendAddress.addressPath),prev_index:a.state.sendAddress.outTxIndex,prev_hash:a.state.sendAddress.outTxHash,amount:a.state.sendAddress.outTxValue.toString(),script_type:"SPENDP2SHWITNESS"}],p=[{op_return_data:s,amount:"0",script_type:"PAYTOOPRETURN"},{address:a.state.transactionElements.recipient,amount:"600",script_type:"PAYTOADDRESS"}],i&&p.push({address_n:x(a.state.sendAddress.addressPath),amount:c.toString(),script_type:"PAYTOP2SHWITNESS"}),e.abrupt("return",{inputs:u,outputs:p,opreturnData:s,opreturnDataSegments:r,estimatedFee:o});case 14:case"end":return e.stop()}},e)})),a._signSendTransaction=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.signTransaction({inputs:a.state.transactionIO.inputs,outputs:a.state.transactionIO.outputs,coin:"btc",push:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),a.state={loading:!0,loadingAlt:!1,currentStep:0,accountInfo:{},accountAddresses:[],sendAddress:{},transactionElements:{},transactionIO:{},transactionResults:{}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.transactionSteps={0:"connectTrezor",1:"selectAddress",2:"specifyDetails",3:"confirmTransaction",4:"complete"}}},{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return E.a.manifest({email:"info@satoshilabs.com",appUrl:"https://trezor.github.io/omni-trezor"}),r.a.createElement("main",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",{className:"title"},"OMNI Wallet for Trezor")),r.a.createElement("article",{className:"app-body"},r.a.createElement(v,{setStep:this.setStep,transactionSteps:this.transactionSteps,currentStep:this.state.currentStep}),r.a.createElement("section",{className:"transaction-container"},this.state.loading?r.a.createElement(b.a,{icon:g.d,spin:!0,className:"loading-spinner"}):{connectTrezor:r.a.createElement(S,{parentCallback:this.handleDiscoverAccounts,setLoading:this.setLoading}),selectAddress:r.a.createElement(N,{parentCallback:this.handleSelectAddress,addresses:this.state.accountAddresses}),specifyDetails:r.a.createElement(O,{parentCallback:this.handleSpecifyDetails,address:this.state.sendAddress}),confirmTransaction:r.a.createElement(k,{parentCallback:this.handleConfirmTransaction,transactionElements:this.state.transactionElements,transactionIO:this.state.transactionIO,sendAddress:this.state.sendAddress,loadingAlt:this.state.loadingAlt,setLoadingAlt:this.setLoadingAlt}),complete:r.a.createElement(y,{transactionResults:this.state.transactionResults})}[this.transactionSteps[this.state.currentStep]])),r.a.createElement("footer",{className:"app-footer"},r.a.createElement("small",null,"\xa9 ",new Date(Date.now()).getFullYear()," Tektite Software LLC.  This tool is Open Source and ",r.a.createElement("a",{href:"https://github.com/trezor/omni-trezor",target:"_blank",rel:"noopener noreferrer"},"available on GitHub."))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.766856dd.chunk.js.map