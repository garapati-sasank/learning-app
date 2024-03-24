to create new Angular app - ng new app-name --standalone=false
to run angular app -- ng s
To create new component command ----   ng g c comp-name  -------ex(ng g c related-tools)
to perform lazyloading ng g m (name)--routing
path: 'womensale' , loadchildren: () => import(    ).then((m) =>m.womenSaleModule) 
{ path: '', redirectTo: 'tops', pathMatch: 'full'} 
