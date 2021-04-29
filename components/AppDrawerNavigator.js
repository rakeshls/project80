import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator}from './AppTabNavigator'
import CSBMenu from './CSBMenu'
export const AppDrawerNavigator=createDrawerNavigator({
Home:{
    screen:AppTabNavigator
},
},
{
    contentComponent:CSBMenu
},
{initialRouteName:'Home'
})