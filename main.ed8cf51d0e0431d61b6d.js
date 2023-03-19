(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t={fetchAvailableCurrencies:async()=>{const e=await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json");return await e.json()},fetchExchangeRate:async(e,t)=>{const n=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${e}/${t}.json`);return await n.json()}},n=e.p+"0ba3c9321b9eb9c7f2e8.svg",r={makeContainer:async()=>{const e=document.createElement("div"),t=document.createElement("div");return t.id="inputContainer",t.appendChild(await a.creator("Amount")),t.appendChild(await a.creator("From")),t.appendChild(u()),t.appendChild(await a.creator("To")),e.appendChild(t),e.appendChild(c()),e.appendChild(o()),e}},a={creator:async e=>{const t=document.createElement("div"),n=document.createElement("p");n.className=e,n.textContent=e,t.appendChild(n);const r=document.createElement("input");return r.type="text",r.name=e+"-input",r.className=e+"-input",r.setAttribute("list",e+"-currency-list"),t.appendChild(r),"From"!==e&&"To"!==e||t.appendChild(await i(e)),t}},c=()=>{const e=["from-curr","to-curr","curr-details"],t=document.createElement("div");t.className="converted-details";for(let n of e){const e=document.createElement("p");e.className=n,t.appendChild(e)}return t},o=()=>{const e=document.createElement("button");return e.id="convert-button",e.textContent="convert",e},i=async e=>{const n=await t.fetchAvailableCurrencies(),r=document.createElement("datalist");r.id=e+"-currency-list";for(let e in n){const t=document.createElement("option");t.textContent=`${e}-${n[e]}`,r.appendChild(t)}return r},u=()=>{const e=document.createElement("img");return e.src=n,e.className="swap-curr",e},l=document.querySelector("#content");(async()=>{l.appendChild(await r.makeContainer())})(),l.addEventListener("click",(e=>{const t=l.querySelector(".Amount-input"),n=document.querySelector(".From-input"),r=document.querySelector(".To-input"),a=document.querySelector(".from-curr"),c=document.querySelector(".to-curr"),o=document.querySelector("#content>div"),i=document.querySelectorAll(".converted-details>p");document.querySelector("#convert-button");function u(){if(""!==t.value&&""!==n.value&&""!==r.value){if("convert-button"===e.target.id&&(o.setAttribute("style","height: 249px"),i.forEach((e=>{e.setAttribute("style","opacity: 1")}))),"swap-curr"===e.target.className){const e=n.value,t=r.value;n.value=t,r.value=e}new Promise((function(e){e(s(n.value.split("-")[0],r.value.split("-")[0]))})).then((function(e){a.textContent=`${t.value} ${n.value.split("-")[1]} =`,c.textContent=`${e[r.value.split("-")[0]]*t.value} ${r.value.split("-")[1]}`})).catch((function(e){console.log(e)}))}}"From-input"!==e.target.className&&"To-input"!==e.target.className||""!==e.target.value&&(e.target.value=""),"convert-button"===e.target.id&&u(),"swap-curr"===e.target.className&&u(),t.addEventListener("input",(()=>{u()}))}));const s=async(e,n)=>await t.fetchExchangeRate(e,n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUUsU0FBUSxTQUFTQyxHQUNqQkEsRUFBUUMsRUFBTWYsRUFBVU8sTUFBTVMsTUFBTSxLQUFLLEdBQUlmLEVBQVFNLE1BQU1TLE1BQU0sS0FBSyxJQUMxRSxJQUNDQyxNQUFLLFNBQVNDLEdBRVhoQixFQUFTbkIsWUFBYyxHQUFHZ0IsRUFBWVEsU0FBU1AsRUFBVU8sTUFBTVMsTUFBTSxLQUFLLE9BQzFFYixFQUFPcEIsWUFBYyxHQUFJbUMsRUFBS2pCLEVBQVFNLE1BQU1TLE1BQU0sS0FBSyxJQUFLakIsRUFBWVEsU0FBU04sRUFBUU0sTUFBTVMsTUFBTSxLQUFLLElBQzlHLElBQ0NHLE9BQU0sU0FBU0MsR0FDWkMsUUFBUUMsSUFBSUYsRUFDaEIsR0FDSixDQUNKLENBNUMwQixlQUF2QjFFLEVBQUU4RCxPQUFPMUIsV0FBcUQsYUFBdkJwQyxFQUFFOEQsT0FBTzFCLFdBQ3pCLEtBQW5CcEMsRUFBRThELE9BQU9ELFFBQ1I3RCxFQUFFOEQsT0FBT0QsTUFBUSxJQUlOLG1CQUFoQjdELEVBQUU4RCxPQUFPbEMsSUFDUmdDLElBR3NCLGNBQXZCNUQsRUFBRThELE9BQU8xQixXQUNSd0IsSUFHSlAsRUFBWUQsaUJBQWlCLFNBQVMsS0FDbENRLEdBQWdCLEdBNkJwQixJQUlKLE1BQU1TLEVBQVFyRCxNQUFPSyxFQUFNQyxVQUNHUixFQUFRTSxrQkFBa0JDLEVBQU1DLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJyZW5jeV9jb252ZXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3VycmVuY3lfY29udmVydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY3VycmVuY3lfY29udmVydGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2N1cnJlbmN5X2NvbnZlcnRlci8uL3NyYy9zY3JpcHRzL2N1cnJlbmN5X2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vY3VycmVuY3lfY29udmVydGVyLy4vc3JjL3NjcmlwdHMvY29udGVudF9pdGVtLmpzIiwid2VicGFjazovL2N1cnJlbmN5X2NvbnZlcnRlci8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnN0IGZldGNoZXIgPSAoKCk9PntcclxuICAgIGNvbnN0IGZldGNoQXZhaWxhYmxlQ3VycmVuY2llcyA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Zhd2F6YWhtZWQwL2N1cnJlbmN5LWFwaUAxL2xhdGVzdC9jdXJyZW5jaWVzLm1pbi5qc29uJywpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFeGNoYW5nZVJhdGUgPSBhc3luYyAoZnJvbSwgdG8pPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Zhd2F6YWhtZWQwL2N1cnJlbmN5LWFwaUAxL2xhdGVzdC9jdXJyZW5jaWVzLyR7ZnJvbX0vJHt0b30uanNvbmApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtmZXRjaEF2YWlsYWJsZUN1cnJlbmNpZXMsIGZldGNoRXhjaGFuZ2VSYXRlfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7ZmV0Y2hlcn07IiwiaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL2N1cnJlbmN5X2ZldGNoZXJcIjtcclxuaW1wb3J0IHN3YXBDdXJyZW5jeSBmcm9tICcuLi9pbWFnZXMvc3dhcF9yb3VuZC5zdmcnO1xyXG5cclxuY29uc3QgY29udGVudEl0ZW1zID0gKCgpPT57XHJcbiAgICBjb25zdCBtYWtlQ29udGFpbmVyID0gYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmlkID0gJ2lucHV0Q29udGFpbmVyJztcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChhd2FpdCBkaXZDcmVhdG9yLmNyZWF0b3IoJ0Ftb3VudCcpKTtcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChhd2FpdCBkaXZDcmVhdG9yLmNyZWF0b3IoJ0Zyb20nKSk7XHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCgpKTtcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChhd2FpdCBkaXZDcmVhdG9yLmNyZWF0b3IoJ1RvJykpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRlZFRleHREZXRhaWxzKCkpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIHJldHVybiB7bWFrZUNvbnRhaW5lcn07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXZDcmVhdG9yID0gKCgpPT57XHJcbiAgICBjb25zdCBjcmVhdG9yID0gYXN5bmMgKG5hbWUpPT57XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gY29udGFpbmVyLmlkID0gZGl2TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIGlucHV0RmllbGQubmFtZSA9IG5hbWUrJy1pbnB1dCc7XHJcbiAgICAgICAgaW5wdXRGaWVsZC5jbGFzc05hbWUgPSBuYW1lKyctaW5wdXQnO1xyXG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCdsaXN0JywgbmFtZSsnLWN1cnJlbmN5LWxpc3QnKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XHJcblxyXG4gICAgICAgIGlmKG5hbWUgPT09ICdGcm9tJyB8fCBuYW1lPT09J1RvJyl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhd2FpdCBjcmVhdGVPcHRpb24obmFtZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRvcn1cclxufSkoKTtcclxuXHJcbmNvbnN0IGNvbnZlcnRlZFRleHREZXRhaWxzID0gKCk9PntcclxuICAgIGNvbnN0IGNsYXNzTmFtZUFycmF5ID0gWydmcm9tLWN1cnInLCAndG8tY3VycicsICdjdXJyLWRldGFpbHMnXTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb252ZXJ0ZWQtZGV0YWlscyc7XHJcblxyXG4gICAgZm9yKGxldCBuYW1lIG9mIGNsYXNzTmFtZUFycmF5KXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbmFtZTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5jb25zdCBidXR0b24gPSAoKT0+e1xyXG4gICAgY29uc3QgY29udmVydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29udmVydEJ1dHRvbi5pZCA9ICdjb252ZXJ0LWJ1dHRvbic7XHJcbiAgICBjb252ZXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NvbnZlcnQnO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRCdXR0b247XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU9wdGlvbiA9IGFzeW5jIChuYW1lKT0+e1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGZldGNoZXIuZmV0Y2hBdmFpbGFibGVDdXJyZW5jaWVzKCk7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcclxuICAgIGxpc3QuaWQgPSBuYW1lKyctY3VycmVuY3ktbGlzdCc7XHJcbiAgICBmb3IobGV0IGtleSBpbiBvcHRpb25zKXtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtrZXl9LSR7b3B0aW9uc1trZXldfWA7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbmNvbnN0IGltZ0VsZW1lbnQgPSAoKT0+e1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWxlbWVudC5zcmMgPSBzd2FwQ3VycmVuY3k7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdzd2FwLWN1cnInO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8vIGNyZWF0ZU9wdGlvbigpO1xyXG5cclxuZXhwb3J0IHtjb250ZW50SXRlbXN9OyIsImltcG9ydCB7IGNvbnRlbnRJdGVtcyB9IGZyb20gXCIuL2NvbnRlbnRfaXRlbVwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vY3VycmVuY3lfZmV0Y2hlclwiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEl0ZW1zLm1ha2VDb250YWluZXIoKSk7XHJcbmNvbnN0IGFwcGVuZENvbnRlbnRJdGVtcyA9IGFzeW5jICgpPT57XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGF3YWl0IGNvbnRlbnRJdGVtcy5tYWtlQ29udGFpbmVyKCkpO1xyXG59XHJcblxyXG5hcHBlbmRDb250ZW50SXRlbXMoKTtcclxuXHJcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgIGNvbnN0IGFtb3VudElucHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcuQW1vdW50LWlucHV0Jyk7XHJcbiAgICBjb25zdCBmcm9tVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRnJvbS1pbnB1dCcpO1xyXG4gICAgY29uc3QgdG9WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Uby1pbnB1dCcpO1xyXG4gICAgY29uc3QgZnJvbVBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJvbS1jdXJyJyk7XHJcbiAgICBjb25zdCB0b1BhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tY3VycicpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQ+ZGl2Jyk7XHJcbiAgICBjb25zdCBhbGxQYXJhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb252ZXJ0ZWQtZGV0YWlscz5wJyk7XHJcbiAgICBjb25zdCBjb252ZXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnZlcnQtYnV0dG9uJyk7XHJcblxyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnRnJvbS1pbnB1dCcgfHwgZS50YXJnZXQuY2xhc3NOYW1lID09PSAnVG8taW5wdXQnKXtcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihlLnRhcmdldC5pZCA9PT0gJ2NvbnZlcnQtYnV0dG9uJyl7XHJcbiAgICAgICAgZGlzcGxheURldGFpbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzd2FwLWN1cnInKXtcclxuICAgICAgICBkaXNwbGF5RGV0YWlscygpXHJcbiAgICB9XHJcblxyXG4gICAgYW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xyXG4gICAgICAgIGRpc3BsYXlEZXRhaWxzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5RGV0YWlscygpe1xyXG4gICAgICAgIGlmKGFtb3VudElucHV0LnZhbHVlICE9PSAnJyAmJiBmcm9tVmFsdWUudmFsdWUgIT09ICcnICYmIHRvVmFsdWUudmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdjb252ZXJ0LWJ1dHRvbicpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAyNDlweCcpO1xyXG4gICAgICAgICAgICAgICAgYWxsUGFyYXMuZm9yRWFjaChwYXJhPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ29wYWNpdHk6IDEnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3N3YXAtY3Vycicpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEZyb21WYWx1ZSA9IGZyb21WYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBUb1ZhbHVlID0gdG9WYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZS52YWx1ZSA9IHRlbXBUb1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG9WYWx1ZS52YWx1ZSA9IHRlbXBGcm9tVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByaWNlKGZyb21WYWx1ZS52YWx1ZS5zcGxpdCgnLScpWzBdLCB0b1ZhbHVlLnZhbHVlLnNwbGl0KCctJylbMF0pKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjdXJyZW5jeURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgZnJvbVBhcmEudGV4dENvbnRlbnQgPSBgJHthbW91bnRJbnB1dC52YWx1ZX0gJHtmcm9tVmFsdWUudmFsdWUuc3BsaXQoJy0nKVsxXX0gPWA7XHJcbiAgICAgICAgICAgICAgICB0b1BhcmEudGV4dENvbnRlbnQgPSBgJHsoZGF0YVt0b1ZhbHVlLnZhbHVlLnNwbGl0KCctJylbMF1dKSphbW91bnRJbnB1dC52YWx1ZX0gJHt0b1ZhbHVlLnZhbHVlLnNwbGl0KCctJylbMV19YDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuY29uc3QgcHJpY2UgPSBhc3luYyAoZnJvbSwgdG8pPT57XHJcbiAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IGF3YWl0IGZldGNoZXIuZmV0Y2hFeGNoYW5nZVJhdGUoZnJvbSwgdG8pO1xyXG4gICByZXR1cm4gY3VycmVudFByaWNlO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImZldGNoZXIiLCJmZXRjaEF2YWlsYWJsZUN1cnJlbmNpZXMiLCJhc3luYyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmV0Y2hFeGNoYW5nZVJhdGUiLCJmcm9tIiwidG8iLCJjb250ZW50SXRlbXMiLCJtYWtlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlucHV0Q29udGFpbmVyIiwiaWQiLCJhcHBlbmRDaGlsZCIsImRpdkNyZWF0b3IiLCJjcmVhdG9yIiwiaW1nRWxlbWVudCIsImNvbnZlcnRlZFRleHREZXRhaWxzIiwibmFtZSIsImhlYWRlciIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiaW5wdXRGaWVsZCIsInR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVPcHRpb24iLCJjbGFzc05hbWVBcnJheSIsImVsZW1lbnQiLCJjb252ZXJ0QnV0dG9uIiwib3B0aW9ucyIsImxpc3QiLCJrZXkiLCJvcHRpb24iLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENvbnRlbnRJdGVtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbW91bnRJbnB1dCIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJmcm9tUGFyYSIsInRvUGFyYSIsImFsbFBhcmFzIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc3BsYXlEZXRhaWxzIiwidmFsdWUiLCJ0YXJnZXQiLCJmb3JFYWNoIiwicGFyYSIsInRlbXBGcm9tVmFsdWUiLCJ0ZW1wVG9WYWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJpY2UiLCJzcGxpdCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==