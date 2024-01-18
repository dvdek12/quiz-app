export default defineNuxtRouteMiddleware((to, from) => {
    if(process.server){
        if(from.fullPath.includes('/results')){
            return navigateTo(to.fullPath)
            
        }else{
            
            return abortNavigation(createError("Nie mozesz zobaczyc odpowiedz przed zakonczeniem quizu."))
            
        }
    }
  })