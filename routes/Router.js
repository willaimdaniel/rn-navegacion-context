import React,{useContext, useState} from "react";
import { NavigationContext } from "../context/NavegationContext";
import Home from "../screens/Home";
import Pageone from "../screens/Pageone";
import Pagetwo from "../screens/Pagetwo";

export default function Router() {
    const {page} = useContext(NavigationContext)

    if (page === 'pagetwo') {
        return <Pagetwo />
    } else if (page === 'pageone') {
        return <Pageone />
    } else {
        return <Home />
    }
}