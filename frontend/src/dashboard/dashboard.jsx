import React, { Component } from "react";
import ContentHeader from "../commom/template/content-header";
import Content from "../commom/template/content";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    Dashboard
                </Content>
            </div>
        );
    }
}

export default Dashboard;