(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/Ws0":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return i}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),l=t("013z");t("qKvR");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b={},o={_frontmatter:b},s=l.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(n.b)(s,c({},o,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Before configuring ",Object(n.b)("inlineCode",{parentName:"p"},"hpa"),", please make sure you have deployed the application as explained in section ",Object(n.b)("inlineCode",{parentName:"p"},"Deploy Application to IKS"),"."),Object(n.b)("h2",null,"Configure a HPA resource"),Object(n.b)("p",null,"Run the following command to configure HPA."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl autoscale deployment test --cpu-percent=25 --min=1 --max=5\n")),Object(n.b)("p",null,"This HPA scales up when CPU exceeds 25% of the allocated container resource."),Object(n.b)("p",null,"You can view the HPA using kubectl. You probably will see ",Object(n.b)("inlineCode",{parentName:"p"},"<unknown>/25%")," for 1-2 minutes and then you should be able to see 0%/25%."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl get hpa\n")),Object(n.b)("h2",null,"Generate load to trigger scaling"),Object(n.b)("p",null,"In the code repository, ",Object(n.b)("inlineCode",{parentName:"p"},"generate-load-hpa.yml")," is provided, which is used to increase the load on CPU. It creates 10 replicas of a container where each container calls CPU intensive operation in a loop."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Modify ",Object(n.b)("inlineCode",{parentName:"p"},"Ingress subdomain")," in ",Object(n.b)("inlineCode",{parentName:"p"},"generate-load-hpa.yaml")," as shown."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"## macOS\n$ sed -i '' s#HOST#<YOUR_INGRESS_SUBDOMAIN># generate-load-hpa.yaml\n\n## Linux\n$ sed -i s#HOST#<YOUR_INGRESS_SUBDOMAIN># generate-load-hpa.yaml\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the following command from the terminal to increase load."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl create -f generate-load-hpa.yaml\n")))),Object(n.b)("h2",null,"Monitor HPA"),Object(n.b)("p",null,"In a terminal, you can check the number of pods created."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl get pods\n")),Object(n.b)("p",null,"In the another tab, watch the HPA with the following command:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl get hpa -w\n")),Object(n.b)("p",null,"You will see HPA scale the pods from 1 up to our configured maximum (5)."),Object(n.b)("p",null,"The resource usage can also be checked through Kubernetes dashboard. Access the dashboard, it will show something like this."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"966px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAABF0lEQVQY01WQu07DQBBF/XOI76GjJz9BAyUVBQ0SFQ0Fj0ikC7EECIGIcRw7tvfhXe/6MI5pGOnq7rzuXG2SZRlVVTHGMAzEIfIvJPV9T1mW5HnOOO+8l1lpxWG/M4Ww7CZKKbquk2akD2FfX6h3zje3XBR35K6GEKmbmk1R4Dojy2G69IfVp+NmbiibnkRrPRkRwch0bfZ9yUF6wuFqxlX5uK9tqxJrDa2FdRnIBEUduH6yHJ81HJ3WvK1F0BiDFrTiVIl4YxTzIuV+s+Rhu+Sj/WEQh7azdCL4+tUwX+54TmuBvF9qFumIHa32JNZaRpcj2rbFaEO0nqAd0Qh3Huccvfyjl79zVtM7he+UsCZ4vecx997xC4DbetuHK7mPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ResourceStatus",title:"ResourceStatus",src:"/cloud-enterprise-examples/static/13c992ddcffa596a71bb8b56bdc54347/d65e0/cpu-mem-usage.png",srcSet:["/cloud-enterprise-examples/static/13c992ddcffa596a71bb8b56bdc54347/7fc1e/cpu-mem-usage.png 288w","/cloud-enterprise-examples/static/13c992ddcffa596a71bb8b56bdc54347/a5df1/cpu-mem-usage.png 576w","/cloud-enterprise-examples/static/13c992ddcffa596a71bb8b56bdc54347/d65e0/cpu-mem-usage.png 966w"],sizes:"(max-width: 966px) 100vw, 966px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"You can now stop load using the following command."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl delete deployment load-generator\n")),Object(n.b)("p",null,"You will notice that HPA will slowly bring the replica count to min number based on its configuration."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1030px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"96.18055555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAAClElEQVQ4y42UC3OaQBSF+f8/rNNOjBmT+EJ8gLGJ1Sgi+AD19n4XlpBp0ykzjCzufnvuOXfxJpOJrFYrmc/nEgSBLJdLSdNU9vu9TKdTWSwWsl6v7b/xeGy/vV5Pwk5bgh/fJGx9l/T1ReIkkSLPxZvNZhLHsU1+fn6WKIoMejwebcyGh8PBNj2dThLvdrJ7f5dTOJZ4s5H07afki1D88UTWOscDBJBd2+22DAYD6ff7kuiO3W7XxlmWyeVyEa5ElcvtKtdfr5LlhchV329W0tV58XYrnu/7stGdnp6epNVqGQQ4QMadTsfKRx3XVje/Fblc3l4kUeVyPslt9SZ9fySXohAPn1A4HA4Nygaj0ciAj4+PphaFufrDtdP3ogsB7jIF5mcDTtUq5niEwWLMpjw2wFdUoZQNAJ7P54+SL0Wl8FgDZ9G8DCUMQ9mp0SxEEZ5yA2TsgE6hAU3h4hNwGkYlkAVbNZNE7+7uTBVlsgkh8R64U0jKruQ4zWrgQG3KdY5HqQAJAwAwbiAEgsq/AQsDpjXQ16pyffboO9S4hqVceo/mdp4C+6eH66UEOs8UulBIFmUAuAEyjqr0XNs0PdxXwKsqnGgW5qFrbBZTMu2Dr6imjUj8EzDZ1x4mjbYJJtOPUGhsvCIUvOQGeH9/b3DK5Si6xjYP9fxu92ml8FV6Q7/0sNnYQPmlfEp2Z7mp8KOxteTjqVY4qubVHlK6C+F/PLwuF5Kd89pDTkpRVI0NkNLwDEXNlPn/q1DSSmEZyheN3fw40Ie0E0DnYbOx7eNQAf1gXALxywEJwZ0UgA8PD+bnn8C8PHoo1GdCGen30ICusfEQEOXiIeeXkiPzprCkb7dbGYo29lWBB50jh9RCcX34G9zDjEJmaODZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"HPAStatus",title:"HPAStatus",src:"/cloud-enterprise-examples/static/6bd6cba5b07d850bb4ff18a81d327f1b/c987a/kubectl-hpa.png",srcSet:["/cloud-enterprise-examples/static/6bd6cba5b07d850bb4ff18a81d327f1b/7fc1e/kubectl-hpa.png 288w","/cloud-enterprise-examples/static/6bd6cba5b07d850bb4ff18a81d327f1b/a5df1/kubectl-hpa.png 576w","/cloud-enterprise-examples/static/6bd6cba5b07d850bb4ff18a81d327f1b/c987a/kubectl-hpa.png 1030w"],sizes:"(max-width: 1030px) 100vw, 1030px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Once the replica count reaches to 1, it means it has scaled-down properly after decreasing load on CPU. Then we can clean-up the hpa configuration using the following command."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"kubectl delete hpa test\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deploy-iks-hpa-index-mdx-61a85e62e95019f123e7.js.map