import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const CRouter = props => {
    const { menu } = props
    // 生成路由
    generateRoute = () => {

    }
    return (
        <>
        {
            menu.map(item => 
            <Route 
                key={item.path}
                path={item.path}
                exact={item.exact}
                render={
                    props => (
                        auth ? <item.component {...props} /> :
                        <Redirect to='/404' {...pops} />
                    )
                }
            />)
        }
        </>
    )
}

export default CRouter