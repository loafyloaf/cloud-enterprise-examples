(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"75V6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},s=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,c({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"What is IBM Cloud Kubernetes Service (IKS)?"),Object(n.b)("p",null,"IBM Cloud Kubernetes Service is a managed offering to create your own Kubernetes cluster of compute hosts to deploy and manage containerized apps on IBM Cloud. As a certified Kubernetes provider, IBM Cloud Kubernetes Service provides intelligent scheduling, self-healing, horizontal scaling, service discovery and load balancing, automated rollouts and rollbacks, and secret and configuration management for your apps."),Object(n.b)("h2",null,"IKS on VPC"),Object(n.b)("p",null,"To understand the sample cluster architectures and the components that are created in an IBM Cloud Kubernetes Service VPC cluster architecture, kindly refer this ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-service-arch#architecture_vpc"}),"link"),".\nIt describes the default components that are setup and how they interact with each other. "),Object(n.b)("h2",null,"Auto scaling of IKS"),Object(n.b)("p",null,"Automatic scaling in Kubernetes comes in two forms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Horizontal Pod Autoscaler (HPA)")," scales the pods in a deployment or replica set. It is autoscaling at pod level. "),Object(n.b)("p",{parentName:"li"},Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1080px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABoklEQVQoz31SS0sCURT2T7XoHwTRIqigqEVEBNE2clEZRSC1KNrXD4hatc8ktXwx5ZPSchgdvaMzMjrjM2e+7lwdcaF+cODcc+/9zncejseXAub2fVg5CWL+wI+nVx7VahUikcHny9hyh2k8gPWzELYvOSy76Nn5Bl9cgYWeYcKGaZpwqFoXmYKGXFHHj6ih1TEwiqLchFhpQqq2kRUUfKZ4cEmeJTRNg5FYNiTEGBg0qzHIrOpd+OMVBBIyPFGC54iIcEpiZKOwSR2WYxNYZl/YpXg/ypjZ8bCyl46DmN31YtMdQb4gIi8IIISg1WqNV8jkD/y/Xl+BL1bBgjOAjfMw1k5DWDx8x971B4qlEiSJoNPpTi95tCcWlHoHKb6GZK6GUJr2MKsikSGQFQUKHZ5ep6bVpigckPElHYlflbXBGkqWDs5CRW2D+5ahqDpqWgPBBEFOnErY949uk9i74ljMdZfE9kWUxe89ebZeRGmzt6u0DTcP2eEwJyqM0dLC6f6uxX5UVq4FQWrghSvT9eqxt4G4jC+hPn1tRns4yZ/05x8DUeUoQD5YXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Horizontal Pod Autoscaler",title:"Horizontal Pod Autoscaler",src:"/cloud-enterprise-examples/static/09b3932c4e2c9526ebe817ec398b6483/4d206/hpa.png",srcSet:["/cloud-enterprise-examples/static/09b3932c4e2c9526ebe817ec398b6483/7fc1e/hpa.png 288w","/cloud-enterprise-examples/static/09b3932c4e2c9526ebe817ec398b6483/a5df1/hpa.png 576w","/cloud-enterprise-examples/static/09b3932c4e2c9526ebe817ec398b6483/4d206/hpa.png 1080w"],sizes:"(max-width: 1080px) 100vw, 1080px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("p",{parentName:"li"},"It is implemented as a Kubernetes API resource and a controller. The controller manager queries the resource utilization against the metrics specified in each HorizontalPodAutoscaler definition. For more details, please refer ",Object(n.b)("a",c({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/"}),"this"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Cluster Autoscaler (CA)")," is the Kubernetes component that can be used to perform scaling nodes in a cluster. It periodically scans the cluster to adjust the number of worker nodes within the worker pools for pending pods to scales-up and to scale down underutilized worker nodes. The following diagram depicts the flow it works."),Object(n.b)("p",{parentName:"li"},Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACIUlEQVQoz3WTy09TQRjF75/j3oVxqws3PqIudKWsNBhJIJoQrI+4QOODIK+ANiQaQUjFBIMhiKAVhJZHCy0ItKXVtFraCm0ptLS99/bn3NuLtognOTOZyXdO5jszIxUKBf5HDYlUDu+3KP7gOuuJNLFohEgkSjweR1VVvaZUI2mDKrS7LBizBkXULwdiDI/N88m2xPLqGqEfP4kK03QmU6bTKQbJkJYwL6iSzaukswp5+S8VcaKcLCoUDMh7CFJ4PYO5/ytPeuZp6nXx4MUs3UMeYaCyH7SOFKWAfTFGe5+bVouLttduGrqczHnjSO+nI5y9NcWpG3ZO1Nk5UjNBxX0HsvxvPno8Rh71L1c4eMnKocrPHL4yxoELozzq8SBNL29wvc2FybyA6dkC1c1zPHy1gqzsb6gYhuaBAKdNNi7em9F55qaNnpEgkiKEfdYQIzMRBm1hLB9DIr9iSKpx0/tBM85kZZ3ZnMLmdh7NS9JacHji+EIpvMEUbn+yTJhJb7G9lSSZ2GArldC5I/b2YkeYltxyObo/BKlpdVPVNM/VRgcV9XaszjDPB1epapylsmGW6hYXlx87+eL+pWtS6bzekfQn7JKcbncucrx2gnN37Jysm+RozThdw0FqOxb09fm7UyK/SY5dG6d3NFh8QEbmUulz2P0dQ1NrtLzx0fkuQMdbP819PhYDSQYmwjRavDwVe+39fr1m6ftmMW+1qP8NCOcXBw+Ns+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Cluster Autoscaler",title:"Cluster Autoscaler",src:"/cloud-enterprise-examples/static/804af7ae85f639b00624dc0550c29eb3/3cbba/ca.png",srcSet:["/cloud-enterprise-examples/static/804af7ae85f639b00624dc0550c29eb3/7fc1e/ca.png 288w","/cloud-enterprise-examples/static/804af7ae85f639b00624dc0550c29eb3/a5df1/ca.png 576w","/cloud-enterprise-examples/static/804af7ae85f639b00624dc0550c29eb3/3cbba/ca.png 1152w","/cloud-enterprise-examples/static/804af7ae85f639b00624dc0550c29eb3/57679/ca.png 1254w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("p",{parentName:"li"},"To know more in detail, you can read ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-ca"}),"here"),"."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deploy-iks-content-overview-index-mdx-199d5763bb3f95420683.js.map