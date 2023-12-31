import React from "react";
import MenuItem from "./menu-item";
import MenuTree from "./menu-tree";

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#/" label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#/billing-cycles' icon='usd' label='Ciclos de pagamento'></MenuItem>
        </MenuTree>
    </ul>
);