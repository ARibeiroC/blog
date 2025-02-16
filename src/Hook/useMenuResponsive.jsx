import { useState } from "react"

export class MenuResponsive{
    constructor(statusMenu, menu){
        this.statusMenu = statusMenu.current
        this.menu = menu.current
    }

    changeDisplay(){
        
        if (this.statusMenu.checked){
            this.menu.style.left = "0%"
            return true
        } else {
            this.menu.style.left = '-100%'
            return false
        }
    }
    
    showMenu(){
        if (this.changeDisplay()){
            setTimeout(()=>this.menu.style.widht = '0', 1000)
        }
    }
    
    hideMenu(){
        if (this.changeDisplay()){
            setTimeout(()=>{
                this.menu.style.width = '100%'
            }, 1000)
        }
    }
}

