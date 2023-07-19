
import React, { useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import ContentsDetail from '../ContentsDetail/ContentsDetail';
import classes from './LeftMenu.module.css';

export default function LeftMenu({ handleDeleteClick, handleExportClick }) {
    

    const items = [
        {
            label:'Monitoring',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'Overview',
                    icon:'pi pi-fw pi-plus',
                    command: handleDeleteClick
                    
                },
                {
                    label:'Performance Counter',
                    icon:'pi pi-fw pi-trash',
                    command: handleExportClick
                    
                },
                {
                    label:'Performance KPI',
                    icon:'pi pi-fw pi-external-link',
                    
                },
                {
                    label:'Performance Pivot',
                    icon:'pi pi-fw pi-plus',
                    
                },
                {
                    label:'Alarm & Event',
                    icon:'pi pi-fw pi-plus',
                    
                },
                {
                    label:'Reporting',
                    icon:'pi pi-fw pi-plus',
                    
                },
                {
                    label:'Use Case',
                    icon:'pi pi-fw pi-plus',
                    
                },
            ]
        },
        {
            label:'Tables',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'CoreNetwork',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Customers',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Radio Network',
                    icon:'pi pi-fw pi-align-center'
                }
            ]
        },
        {
            label:'Configuration',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'On-Air Configuration',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Operation Bulk',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Operation Fix',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                },{
                    label:'Overview',
                    icon:'pi pi-fw pi-plus',
                    
                }
            ]
        },
        {
            label:'Process Management',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archive',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

  
    

    return (
        <div className={classes['left-menu-container']}>
        
          <PanelMenu model={items} className={classes.menu}/>
         
      </div>
    )
}
        